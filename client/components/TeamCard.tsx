import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  color?: "purple" | "violet" | "blue";
}

const colorMap = {
  purple: "from-purple-600 to-primary",
  violet: "from-secondary to-purple-700",
  blue: "from-blue-600 to-cyan-600",
};

export default function TeamCard({
  name,
  role,
  description,
  image,
  color = "purple",
}: TeamCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300" />

      {/* Card container */}
      <div className="relative bg-gradient-to-b from-card to-background rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
        {/* Image section */}
        <div
          className={`w-full aspect-square bg-gradient-to-br ${colorMap[color]} relative overflow-hidden`}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-30">♪</div>
            </div>
          )}

          {/* Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

          {/* Role badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-primary/50 rounded-full">
            <span className="text-xs font-bold text-primary">{role}</span>
          </div>
        </div>

        {/* Info section */}
        <div className="p-5">
          {/* Name */}
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
            {description}
          </p>

          {/* Stats bar */}
          <div className="mt-4 pt-3 border-t border-border/50 flex gap-2">
            <div className="flex-1">
              <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <p className="text-xs text-muted-foreground mt-1">Vibe</p>
            </div>
            <div className="flex-1">
              <div className="h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              <p className="text-xs text-muted-foreground mt-1">Energy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
