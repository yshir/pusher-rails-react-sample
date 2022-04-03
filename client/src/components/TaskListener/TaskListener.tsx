import { useEffect } from 'react';

import { usePusherContext } from '@/contexts/PusherContext';
import { useTaskList } from '@/hooks/useTaskList';
import { Task } from '@/types/Task';

type Props = {
  children: React.ReactNode;
};

type TaskCreated = {
  tasks: Task[];
};

export const TaskListener: React.VFC<Props> = ({ children }) => {
  const { pusher } = usePusherContext();
  const { mutate } = useTaskList();

  useEffect(() => {
    pusher.subscribe('task-channel');
    pusher.bind('task-created', (data: TaskCreated) => {
      console.log('task-created', data.tasks);
      mutate(data.tasks);
    });

    return () => {
      pusher.unsubscribe('task-channel');
    };
  }, [mutate, pusher]);

  return <>{children}</>;
};
