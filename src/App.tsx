import React from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { MotivationalQuote } from './components/MotivationalQuote';
import { useTodoStore } from './store/todoStore';

function App() {
  const darkMode = useTodoStore((state) => state.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Header />
          <MotivationalQuote />
          <AddTask />
          <div className="mt-8">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;