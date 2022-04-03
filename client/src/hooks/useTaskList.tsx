import useSWR from 'swr';

import { Task } from '@/types/Task';

type UseTaskList = () => {
  tasks: Task[];
};

export const useTaskList: UseTaskList = () => {
  const { data } = useSWR('/tasks');

  return {
    tasks: data,
  };
};
