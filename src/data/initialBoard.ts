import { Column } from "../types/kanban";

export const initialBoard: Column[] = [
  {
    id: "todo",
    title: "Todo",
    color: "#3b82f6",
    cards: [
      { id: "1", title: "Create initial project plan" },
      { id: "2", title: "Design landing page" },
      { id: "3", title: "Review codebase structure" },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    color: "#f59e0b",
    cards: [
      { id: "4", title: "Implement authentication" },
      { id: "5", title: "Set up database schema" },
      { id: "6", title: "Fix navbar bugs" },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#10b981",
    cards: [
      { id: "7", title: "Organize project repository" },
      { id: "8", title: "Write API documentation" },
    ],
  },
];
