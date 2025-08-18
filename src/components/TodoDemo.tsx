'use client'

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

export default function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Review team proposals', completed: false, category: 'Work' },
    { id: 2, text: 'Update demo examples', completed: true, category: 'Development' },
    { id: 3, text: 'Schedule client meeting', completed: false, category: 'Work' }
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Work', 'Development', 'Personal'];

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
          category: 'Personal'
        }
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = selectedCategory === 'All'
    ? todos
    : todos.filter(todo => todo.category === selectedCategory);

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">My Tasks</h2>
            <p className="opacity-90">Stay organized and productive</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{completedCount}</div>
            <div className="text-sm opacity-90">Completed</div>
          </div>
        </div>
      </div>

      {/* Add Todo */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 p-6 mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 transition-all ${
              todo.completed ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  todo.completed
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-slate-300 dark:border-slate-600 hover:border-green-500'
                }`}
              >
                {todo.completed && (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <div className={`font-medium text-slate-900 dark:text-white ${
                  todo.completed ? 'line-through' : ''
                }`}>
                  {todo.text}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {todo.category}
                </div>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {filteredTodos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
              No tasks found
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {selectedCategory === 'All' ? 'Add your first task above' : `No tasks in ${selectedCategory} category`}
            </p>
          </div>
        )}
      </div>

      {/* Summary */}
      {todos.length > 0 && (
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          {todos.length} total tasks • {completedCount} completed • {todos.length - completedCount} remaining
        </div>
      )}
    </div>
  );
}