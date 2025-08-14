import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export const GradientCard = ({ children, className, variant = "primary" }: GradientCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    accent: "bg-gradient-accent"
  };

  return (
    <div className={cn(
      "rounded-3xl p-8 text-white shadow-card transition-all duration-300 hover:shadow-glow hover:scale-105",
      gradientClasses[variant],
      className
    )}>
      {children}
    </div>
  );
};