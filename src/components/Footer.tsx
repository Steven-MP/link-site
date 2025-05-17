import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mt-16 py-6 text-center text-xs text-muted-foreground",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <span>
          Built with{" "}
          <a
            href="https://astro.build"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Astro
          </a>
        </span>
        <span>•</span>
        <span>
          Made by{" "}
          <a
            href="https://steven-pratt.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Steven Pratt
          </a>
        </span>
        <span>•</span>
        <span>© {currentYear}</span>
      </div>
    </footer>
  );
}
