import { useCallback } from 'react';

import { useTaskList } from '@/hooks/useTaskList';
import { fetcher } from '@/lib/fetcher';

type UseTaskCreate = () => {
  create: (title: string) => Promise<void>;
};

export const useTaskCreate: UseTaskCreate = () => {
  const { mutate } = useTaskList();

  const create = useCallback(
    async (title: string) => {
      // create
      await fetcher('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      // refresh
      mutate();
    },
    [mutate],
  );

  return {
    create,
  };
};
