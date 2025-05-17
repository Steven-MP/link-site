import { Twitter, Github, Linkedin, Youtube, Mail, Disc as Discord } from 'lucide-react';

export const socialIcons = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  discord: Discord,
  email: Mail,
};

interface SocialLink {
  name: string;
  href: string;
  icon: any;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex justify-center gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-muted"
            title={link.name}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}