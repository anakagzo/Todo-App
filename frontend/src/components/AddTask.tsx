import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface AddTaskProps {
  onAddTask: (title: string) => void;
}

export const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border-border/50 focus:border-primary focus:shadow-glow transition-all duration-200"
      />
      <Button 
        type="submit" 
        className="bg-gradient-primary hover:opacity-90 transition-all duration-200 shadow-soft hover:shadow-medium"
        disabled={!title.trim()}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  );
};