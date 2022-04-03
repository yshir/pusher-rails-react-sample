import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { TaskCard } from '@/components/TaskCard';
import { useTaskCreate } from '@/hooks/useTaskCreate';
import { Task } from '@/types/Task';

type Props = {
  tasks: Task[];
};

export const TaskList: React.VFC<Props> = ({ tasks }) => {
  const [value, setValue] = useState('');
  const { create } = useTaskCreate();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      await create(value);
      e.preventDefault();
      setValue('');
    },
    [create, value],
  );

  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="border border-gray-200 rounded-lg shadow-lg my-32 p-12">
        <h1 className="text-2xl font-semibold mb-6">Task List</h1>

        <form className="flex items-center space-x-2 mb-6" onSubmit={onSubmit}>
          <input className="w-full border p-1.5 rounded-md" type="text" value={value} onChange={onChange} />
          <button
            className="border rounded-md py-1.5 px-6 bg-gray-800 hover:bg-gray-700 transition-colors text-white"
            type="submit"
          >
            Create
          </button>
        </form>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};
