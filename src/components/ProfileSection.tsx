import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfileSectionProps {
  name: string;
  title: string;
  description: string;
  avatarSrc: string;
  className?: string;
}

export function ProfileSection({
  name,
  title,
  description,
  avatarSrc,
  className,
}: ProfileSectionProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="mb-4">
        <Avatar className="h-36 w-36 md:h-42 md:h-42 lg:h-48 lg:w-48 border-2 border-border">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-2xl font-bold tracking-tight mt-3 md:text-3xl">
        {name}
      </h1>
      <p className="text-muted-foreground mt-1 font-medium">{title}</p>

      {/* Horizontal line with fading edges */}
      <div className="w-full max-w-md mt-4 mb-4 flex items-center">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
      </div>

      <p className="max-w-md text-muted-foreground text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
