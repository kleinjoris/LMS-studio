import { BookOpen } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ variant = 'dark', size = 'medium' }: LogoProps) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10',
  };

  const colorClasses = {
    light: 'text-white',
    dark: 'text-primary-600',
  };

  return (
    <div className={`flex items-center justify-center rounded-md bg-primary-600 p-1.5 ${sizeClasses[size]}`}>
      <BookOpen className={`${colorClasses.light}`} size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} />
    </div>
  );
};

export default Logo;