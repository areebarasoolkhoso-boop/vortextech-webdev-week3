# React Task Manager — Week 3

## What I Built
A functional Task Manager (to-do list) app built with React, using functional components
and the useState hook for state management. Users can add tasks, mark them as complete
(with a strikethrough), and delete them.

## Features
- Add new tasks via a controlled input form
- Mark tasks as complete/incomplete with a checkbox (strikethrough styling)
- Delete tasks
- Component-based architecture: TaskInput, TaskList, and TaskItem
- State managed in the parent App component and passed down via props
- Clean, responsive UI

## Components
- **App.jsx** — holds the tasks state and passes handler functions to children
- **TaskInput.jsx** — controlled form for adding new tasks
- **TaskList.jsx** — renders the list of tasks, maps over the tasks array
- **TaskItem.jsx** — renders a single task with checkbox and delete button

## How to Run
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open the local URL shown in the terminal (usually `http://localhost:5173`)

## Built With
- React (via Vite)
- useState hook
- Plain CSS

---
Vortex Tech Web Development Internship — Week 3