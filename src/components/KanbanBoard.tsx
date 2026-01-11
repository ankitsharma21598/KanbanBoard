import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Column } from "./Column";
import { initialBoard } from "../data/initialBoard";
import { Column as ColumnType } from "../types/kanban";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function KanbanBoard() {
  const [board, setBoard] = useLocalStorage<ColumnType[]>(
    "kanban-board",
    initialBoard
  );


  const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id.toString();
  const overId = over.id.toString();

  let fromColumn: ColumnType | undefined;
  let toColumn: ColumnType | undefined;

  for (const col of board) {
    if (col.cards.some(c => c.id === activeId)) {
      fromColumn = col;
    }
    if (col.id === overId || col.cards.some(c => c.id === overId)) {
      toColumn = col;
    }
  }

  if (!fromColumn || !toColumn) return;

  // SAME COLUMN REORDER
  if (fromColumn.id === toColumn.id) {
    const oldIndex = fromColumn.cards.findIndex(c => c.id === activeId);
    const newIndex = toColumn.cards.findIndex(c => c.id === overId);

    if (oldIndex === -1 || newIndex === -1) return;

    const updatedCards = [...fromColumn.cards];
    const [moved] = updatedCards.splice(oldIndex, 1);
    updatedCards.splice(newIndex, 0, moved);

    setBoard(prev =>
      prev.map(col =>
        col.id === fromColumn!.id
          ? { ...col, cards: updatedCards }
          : col
      )
    );
  } 
  // MOVE TO DIFFERENT COLUMN
  else {
    const movedCard = fromColumn.cards.find(c => c.id === activeId);
    if (!movedCard) return;

    setBoard(prev =>
      prev.map(col => {
        if (col.id === fromColumn!.id) {
          return {
            ...col,
            cards: col.cards.filter(c => c.id !== activeId),
          };
        }

        if (col.id === toColumn!.id) {
          return {
            ...col,
            cards: [...col.cards, movedCard],
          };
        }

        return col;
      })
    );
  }
};


  const addCard = (colId: string) => {
    const title = prompt("Enter card title");
    if (!title) return;

    setBoard((prev) =>
      prev.map((col) =>
        col.id === colId
          ? {
              ...col,
              cards: [...col.cards, { id: Date.now().toString(), title }],
            }
          : col
      )
    );
  };

  const deleteCard = (colId: string, cardId: string) => {
    setBoard((prev) =>
      prev.map((col) =>
        col.id === colId
          ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) }
          : col
      )
    );
  };

  const updateCard = (colId: string, cardId: string, title: string) => {
    setBoard((prev) =>
      prev.map((col) =>
        col.id === colId
          ? {
              ...col,
              cards: col.cards.map((c) =>
                c.id === cardId ? { ...c, title } : c
              ),
            }
          : col
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-4 flex flex-col md:flex-row gap-4 justify-center">
        {board.map((col) => (
          <Column
            key={col.id}
            column={col}
            onAdd={() => addCard(col.id)}
            onDelete={(id) => deleteCard(col.id, id)}
            onUpdate={(id, title) => updateCard(col.id, id, title)}
          />
        ))}
      </div>
    </DndContext>
  );
}
