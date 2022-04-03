import useSWR, { KeyedMutator } from 'swr';

import { Task } from '@/types/Task';

type UseTaskList = () => {
  tasks: Task[];
  mutate: KeyedMutator<Task[]>;
};

export const useTaskList: UseTaskList = () => {
  const { data, mutate } = useSWR('/tasks');

  return {
    tasks: data,
    mutate,
  };
};
