import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Task } from './TodoApp';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div 
      className={cn(
        "group flex items-center gap-3 p-3 rounded-lg border transition-all duration-200",
        "hover:shadow-soft hover:shadow-glow",
        task.completed 
          ? "bg-todo-success/5 border-todo-success/20" 
          : "bg-background border-border"
      )}
    >
      <Checkbox
        checked={task.completed}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-todo-success data-[state=checked]:border-todo-success"
      />
      <span 
        className={cn(
          "flex-1 transition-all duration-200",
          task.completed 
            ? "line-through text-todo-completed" 
            : "text-foreground"
        )}
      >
        {task.title}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};