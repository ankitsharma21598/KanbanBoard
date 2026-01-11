import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Column as ColumnType } from "../types/kanban";
import { Card } from "./Card";
import { useDroppable } from "@dnd-kit/core";



interface Props {
  column: ColumnType;
  onAdd: () => void;
  onDelete: (cardId: string) => void;
  onUpdate: (cardId: string, title: string) => void;
}


export function Column({ column, onAdd, onDelete, onUpdate }: Props) {
  console.log("Column ===>",column);
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <div ref={setNodeRef} className="bg-gray-100 rounded-xl p-4 w-full md:w-80 min-h-100">
      <div className="flex justify-between items-center mb-3 text-white px-3 py-2 rounded " style={{ backgroundColor: column.color }}>
        <h3 className="font-semibold">
          {column.title} ({column.cards.length})
        </h3>
        <button
          onClick={onAdd}
          className="bg-white text-black px-2 py-1 rounded"
        >
          +
        </button>
      </div>

      <SortableContext
        items={column.cards.map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {column.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={() => onDelete(card.id)}
              onUpdate={(title) => onUpdate(card.id, title)}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
