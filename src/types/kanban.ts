export type ColumnType = "todo" | "inprogress" | "done";

export interface Card {
  id: string;
  title: string;
}

export interface Column {
  id: ColumnType;
  title: string;
  cards: Card[];
  color: string;
}
