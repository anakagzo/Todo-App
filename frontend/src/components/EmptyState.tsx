import { CheckCircle2 } from 'lucide-react';

export const EmptyState = () => {
  return (
    <div className="text-center py-8">
      <CheckCircle2 className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
      <p className="text-muted-foreground">
        No tasks yet — add your first one!
      </p>
    </div>
  );
};