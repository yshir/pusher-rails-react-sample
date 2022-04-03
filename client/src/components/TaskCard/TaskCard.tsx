import { Task } from '@/types/Task';

type Props = {
  task: Task;
};

export const TaskCard: React.VFC<Props> = ({ task }) => {
  return (
    <div className="border rounded-md shadow-sm p-4">
      <p>{task.title}</p>
    </div>
  );
};
