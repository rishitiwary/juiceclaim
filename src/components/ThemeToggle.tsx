'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [isChanging, setIsChanging] = React.useState(false);

  React.useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
  }, []);

  React.useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Also set data attribute for additional CSS targeting
    root.setAttribute('data-theme', theme);
    
    // Set CSS custom properties for theme colors
    if (theme === 'dark') {
      root.style.setProperty('--theme-bg-primary', '#0F172A');
      root.style.setProperty('--theme-bg-secondary', '#1E293B');
      root.style.setProperty('--theme-bg-card', '#334155');
      root.style.setProperty('--theme-text-primary', '#F8FAFC');
      root.style.setProperty('--theme-text-secondary', '#CBD5E1');
      root.style.setProperty('--theme-border', '#475569');
    } else {
      root.style.setProperty('--theme-bg-primary', '#F7F9FF');
      root.style.setProperty('--theme-bg-secondary', '#FFFFFF');
      root.style.setProperty('--theme-bg-card', '#FFFFFF');
      root.style.setProperty('--theme-text-primary', '#1E293B');
      root.style.setProperty('--theme-text-secondary', '#64748B');
      root.style.setProperty('--theme-border', '#E2E8F0');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Debug: Log the current classes on the HTML element
    console.log('HTML classes after theme change:', root.className);
    console.log('HTML data-theme:', root.getAttribute('data-theme'));
    console.log('Current theme:', theme);
    console.log('CSS custom properties set for theme:', theme);
    
    // Force a re-render by triggering a style recalculation
    root.style.colorScheme = theme;
  }, [theme]);

  const handleThemeChange = (e: React.MouseEvent) => {
    console.log('Theme toggle clicked!', { currentTheme: theme, isChanging });
    e.preventDefault();
    e.stopPropagation();
    
    if (isChanging) return; // Prevent multiple clicks during transition
    
    setIsChanging(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Changing theme to:', newTheme);
    setTheme(newTheme);
    setTimeout(() => setIsChanging(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    console.log('Theme toggle touched!', { currentTheme: theme, isChanging });
    e.preventDefault();
    e.stopPropagation();
    
    if (isChanging) return; // Prevent multiple touches during transition
    
    setIsChanging(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Changing theme to:', newTheme);
    setTheme(newTheme);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <button
      onClick={handleThemeChange}
      onMouseDown={handleThemeChange}
      onTouchStart={handleTouchStart}
      className={cn(
        "relative w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer",
        isChanging && "pointer-events-none",
        className
      )}
      aria-label="Toggle theme"
      disabled={isChanging}
      style={{
        pointerEvents: isChanging ? 'none' : 'auto',
        zIndex: 9999,
        position: 'relative'
      }}
    >
     
     {theme=='light'? <Sun className="absolute inset-0 h-full w-full transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-90" /> :         <Moon className="absolute inset-0 h-full w-full transition-all duration-300 opacity-0 rotate-90 dark:opacity-100 dark:rotate-0" />}
    
    </button>
  );
}
