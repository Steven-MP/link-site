import React from 'react';
import { cn } from '@/lib/utils';

interface LinkContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LinkContainer({ children, className }: LinkContainerProps) {
  return (
    <div className={cn("grid gap-3 w-full max-w-xl mx-auto", className)}>
      {children}
    </div>
  );
}