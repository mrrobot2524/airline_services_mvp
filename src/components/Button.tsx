import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'danger' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'bg-red-500 hover:bg-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm rounded-md',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};