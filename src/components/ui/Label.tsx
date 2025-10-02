import React from 'react';

export interface LabelProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'span' | 'b' | 'i' | 'strong' | 'em';
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label' | 'error' | 'success';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning' | 'info';
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  heading: 'font-bold text-gray-900 dark:text-white',
  subheading: 'font-semibold text-gray-800 dark:text-gray-100',
  body: 'font-normal text-gray-700 dark:text-gray-300',
  caption: 'font-normal text-gray-500 dark:text-gray-400',
  label: 'font-medium text-gray-600 dark:text-gray-400',
  error: 'font-medium text-red-600 dark:text-red-400',
  success: 'font-medium text-green-600 dark:text-green-400',
};

const sizeStyles = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

const weightStyles = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const colorStyles = {
  primary: 'text-gray-900 dark:text-white',
  secondary: 'text-gray-600 dark:text-gray-300',
  muted: 'text-gray-500 dark:text-gray-400',
  error: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  info: 'text-blue-600 dark:text-blue-400',
};

export function Label({
  as: Component = 'p',
  variant = 'body',
  size = 'base',
  weight = 'normal',
  color,
  className = '',
  children,
  ...props
}: LabelProps) {
  const baseStyles = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const weightClass = weightStyles[weight];
  const colorClass = color ? colorStyles[color] : '';

  const combinedClassName = [
    baseStyles,
    sizeClass,
    weightClass,
    colorClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
