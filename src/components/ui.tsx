'use client';

import { clsx } from 'clsx';
import { merge } from 'tailwind-merge';
import { Icon } from 'lucide-react';

const cn = (...inputs: string[]) => merge(...inputs);

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({
  variant,
  size,
  loading,
  disabled,
  onClick,
  children,
  className,
  href,
}: ButtonProps) => {
  const classes = cn(
    'inline-flex justify-center rounded-md border border-transparent shadow-sm',
    {
      'bg-primary hover:bg-primary-dark text-white': variant === 'primary',
      'bg-secondary hover:bg-secondary-dark text-black': variant === 'secondary',
      'bg-white hover:bg-gray-100 text-black border-gray-300': variant === 'outline',
      'text-black hover:text-gray-900': variant === 'ghost',
    },
    {
      'text-xs py-1 px-2': size === 'sm',
      'text-sm py-2 px-4': size === 'md',
      'text-base py-3 px-6': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {loading ? <Icon name="spinner" className="animate-spin" /> : children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Icon name="spinner" className="animate-spin" /> : children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="rounded-md bg-white shadow-sm">{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className="bg-gray-100 py-2 px-4 text-sm">{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="text-lg font-bold">{children}</h2>;
};

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => {
  return <div className="py-4 px-4">{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => {
  return <div className="bg-gray-100 py-2 px-4 text-sm">{children}</div>;
};

interface BadgeProps {
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

const Badge = ({ variant, children }: BadgeProps) => {
  const classes = cn(
    'inline-flex justify-center rounded-md py-1 px-2 text-xs',
    {
      'bg-gray-100 text-gray-700': variant === 'default',
      'bg-success text-white': variant === 'success',
      'bg-warning text-white': variant === 'warning',
      'bg-error text-white': variant === 'error',
      'bg-info text-white': variant === 'info',
    }
  );

  return <span className={classes}>{children}</span>;
};

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
  icon?: React.ReactNode;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  icon,
}: InputProps) => {
  const classes = cn(
    'block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary',
    {
      'border-red-500': error,
    }
  );

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative">
        {icon && <span className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classes}
        />
      </div>
      {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
    </div>
  );
};

const Spinner = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 border-4 border-gray-200 rounded-full border-t-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

interface AvatarProps {
  name: string;
  size: 'sm' | 'md' | 'lg';
  bg?: string;
}

const Avatar = ({ name, size, bg }: AvatarProps) => {
  const initials = name.split(' ').map((n) => n[0]).join('');
  const bgColor = bg || `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const classes = cn(
    'flex items-center justify-center rounded-full text-white',
    {
      'h-8 w-8 text-xs': size === 'sm',
      'h-12 w-12 text-sm': size === 'md',
      'h-16 w-16 text-base': size === 'lg',
    }
  );

  return (
    <div className={classes} style={{ backgroundColor: bgColor }}>
      {initials}
    </div>
  );
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-md shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-4 px-4">
          <h2 className="text-lg font-bold">{title}</h2>
          {children}
        </div>
        <div className="py-2 px-4 border-t border-gray-200">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const StatCard = ({ title, value, change, changeType, icon }: StatCardProps) => {
  const classes = cn(
    'block rounded-md border border-gray-300 bg-white py-4 px-4 text-sm',
    {
      'border-green-500': changeType === 'up',
      'border-red-500': changeType === 'down',
    }
  );

  return (
    <div className={classes}>
      <div className="flex items-center justify-between">
        {icon}
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">{value}</p>
          <p
            className={cn('text-sm', {
              'text-green-500': changeType === 'up',
              'text-red-500': changeType === 'down',
            })}
          >
            {change}
          </p>
        </div>
      </div>
    </div>
  );
};

export {
  cn,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Spinner,
  Avatar,
  Modal,
  StatCard,
};