import { NextPage } from 'next';

import { TaskList } from '@/components/TaskList';
import { TaskListener } from '@/components/TaskListener';
import { useTaskList } from '@/hooks/useTaskList';

const Page: NextPage = () => {
  const { tasks } = useTaskList();

  if (!tasks) {
    return <p>loading...</p>;
  }

  return (
    <TaskListener>
      <TaskList tasks={tasks} />
    </TaskListener>
  );
};

export default Page;
