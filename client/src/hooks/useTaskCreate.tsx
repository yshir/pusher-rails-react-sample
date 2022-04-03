import { useCallback } from 'react';

import { useTaskList } from '@/hooks/useTaskList';

type UseTaskCreate = () => {
  create: (title: string) => Promise<void>;
};

export const useTaskCreate: UseTaskCreate = () => {
  const { mutate } = useTaskList();

  const create = useCallback(
    async (title: string) => {
      // create
      await fetch(process.env.API_URL + '/tasks', {
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
