import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors disabled:opacity-50 disabled:pointer-events-none';
  const styles = {
    default: 'bg-accent text-primary hover:opacity-90',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-primary',
  };
  return <button className={cn(base, styles[variant], className)} {...props} />;
}
