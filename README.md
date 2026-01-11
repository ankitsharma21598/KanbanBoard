# Kanban Board

A simple, responsive, and interactive Kanban board application built with React, TypeScript, and Vite. It allows users to manage tasks across different columns with drag-and-drop functionality, and all changes are persistently stored in the browser's local storage.

## Live Link: https://kanban-board-smoky-gamma.vercel.app/

![Screenshot](/src/assets/screenshot.png)

## Features

- **Three-Column Layout**: Organizes tasks into "Todo", "In Progress", and "Done" columns.
- **Task Management**: Create, update, and delete tasks (cards) directly on the board.
- **Drag & Drop**: Smoothly move cards within the same column or across different columns, powered by `@dnd-kit`.
- **Persistent State**: The board's state is automatically saved to `localStorage`, so your tasks are preserved between sessions.
- **Responsive Design**: The layout adapts to both desktop and mobile screens.
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and styled with Tailwind CSS.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A next-generation frontend tooling that provides a faster and leaner development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Dnd Kit**: A lightweight, modular, and accessible library for building drag and drop interfaces.
- **ESLint**: For identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/ankitsharma21598/KanbanBoard.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd KanbanBoard
    ```

3.  **Install dependencies:**

    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the TypeScript code and builds the application for production.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Serves the production build locally to preview it.

## Project Structure

The project follows a standard Vite + React project structure. Key directories and files include:

```
/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Image and other static assets
│   ├── components/         # Reusable React components
│   │   ├── Card.tsx        # Individual task card component
│   │   ├── Column.tsx      # Column component (e.g., Todo, In Progress)
│   │   └── KanbanBoard.tsx # Main board container and logic
│   ├── data/
│   │   └── initialBoard.ts # Default board state
│   ├── hooks/
│   │   └── useLocalStorage.ts # Custom hook for persisting state
│   ├── types/
│   │   └── kanban.ts       # TypeScript type definitions
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```
