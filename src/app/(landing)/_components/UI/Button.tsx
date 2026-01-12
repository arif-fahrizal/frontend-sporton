import React from 'react';

interface TButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'dark' | 'ghost';
  size?: 'small' | 'medium';
  children: React.ReactNode;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}: Readonly<TButtonProps>) {
  const baseStyles = 'inline-flex justify-center items-center gap-2 duration-300 hover:scale-105';

  const variantStyles = {
    primary: 'text-white bg-primary hover:bg-primary/85',
    dark: 'text-white bg-dark hover:bg-dark/85',
    ghost: 'text-dark bg-transparent hover:bg-gray-100',
  };

  const sizeStyles = {
    small: 'py-4 px-9',
    medium: 'py-2.5 px-7',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
