import { NextPage } from 'next';

import { TaskList } from '@/components/TaskList';
import { useTaskList } from '@/hooks/useTaskList';

const Page: NextPage = () => {
  const { tasks } = useTaskList();

  if (!tasks) {
    return <p>loading...</p>;
  }

  return <TaskList tasks={tasks} />;
};

export default Page;
