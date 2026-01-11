import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card as CardType } from "../types/kanban";

interface Props {
  card: CardType;
  onDelete: () => void;
  onUpdate: (title: string) => void;
}

export function Card({ card, onDelete, onUpdate }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    
    transition,
  };

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(card.title);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-lg p-3 shadow flex items-center gap-2"
    >
      {/* DRAG HANDLE ONLY */}
      <span
        {...attributes}
        {...listeners}
        className="cursor-grab text-gray-400 select-none"
      >
        ⠿
      </span>

      {/* CARD TEXT */}
      {editing ? (
        <input
          className="w-full border rounded px-2 py-1 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => {
            onUpdate(title);
            setEditing(false);
          }}
          autoFocus
        />
      ) : (
        <p
          className="text-sm flex-1 cursor-text"
          onClick={() => setEditing(true)}
        >
          {card.title}
        </p>
      )}

      {/* DELETE BUTTON */}
      <button
        onClick={onDelete}
        className="text-red-500 ml-2"
      >
        🗑
      </button>
    </div>
  );
}
