import { useEffect, useState } from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.id}. {todo.title} - {todo.completed ? 'Done' : 'TODO'} </li>
      ))}
      </ul>
      
    </div>
  );
}
