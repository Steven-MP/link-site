import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function LinkCard({ 
  title, 
  description, 
  href,
  className 
}: LinkCardProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex flex-col group relative p-5 rounded-lg border border-border bg-card text-card-foreground transition-all duration-200",
        "hover:shadow-md hover:border-primary/20",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-200 mt-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </a>
  );
}