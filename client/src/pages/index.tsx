import { NextPage } from 'next';

import { useTaskList } from '@/hooks/useTaskList';

const Page: NextPage = () => {
  const { tasks } = useTaskList();

  if (!tasks) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
