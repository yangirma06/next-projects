"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Next.js basics", done: false },
    { id: 2, text: "Build a todo app", done: false },
    { id: 3, text: "Get a job", done: false },
  ]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-start justify-center pt-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border p-6">
        <h1 className="text-3xl font-semibold mb-1 text-gray-900">
          My Todos
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {todos.filter((t) => !t.done).length} remaining
        </p>

        <div className="flex gap-2 mb-6">
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add a todo..."
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg text-sm font-medium transition"
          >
            Add
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            No todos yet — add one above.
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2"
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 accent-blue-600"
                />
                <span
                  className={`text-sm flex-1 ${todo.done ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-gray-400 hover:text-red-500 text-xs transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}