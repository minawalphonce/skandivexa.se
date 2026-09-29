import React from 'react';
import logoIcon from '../assets/images/logo-icon-.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'emblem' | 'stacked';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showEmblem?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showEmblem = true,
}) => {
  const isDark = theme === 'dark';

  // Dimensions for the emblem image
  const emblemSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
    xl: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const textSizes = {
    sm: {
      title: 'text-[15px]',
      sub: 'text-[11px]',
    },
    md: {
      title: 'text-[17px] sm:text-[19px]',
      sub: 'text-[12px] sm:text-[13px]',
    },
    lg: {
      title: 'text-[20px] sm:text-[23px]',
      sub: 'text-[13px] sm:text-[14px]',
    },
    xl: {
      title: 'text-[26px] sm:text-[30px]',
      sub: 'text-[16px] sm:text-[18px]',
    },
  };

  const EmblemImage = (
    <div
      className={`relative ${emblemSizes[size]} shrink-0 flex items-center justify-center p-0.5 rounded-lg transition-transform duration-200 group-hover:scale-105`}
    >
      <img
        src={logoIcon}
        alt="Skandivexa konsult AB Emblem"
        className="w-full h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );

  // Variant: Emblem only
  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {EmblemImage}
      </div>
    );
  }

  // Variant: Stacked
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        {showEmblem && EmblemImage}
        <div className={`flex flex-col items-center justify-center leading-tight ${showEmblem ? 'mt-2' : ''} text-center`}>
          <span
            className={`font-sans font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#05172C]'
            } ${textSizes[size].title}`}
          >
            Skandivexa
          </span>
          <span
            className={`font-sans font-semibold tracking-normal mt-0.5 ${
              isDark ? 'text-[#C26E26]' : 'text-[#C26E26]'
            } ${textSizes[size].sub}`}
          >
            konsult AB
          </span>
        </div>
      </div>
    );
  }

  // Variant: Horizontal (Default in Header & Footer)
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {showEmblem && EmblemImage}
      <div className="flex items-baseline gap-1.5 leading-none">
        <span
          className={`font-sans font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#05172C]'
          } ${textSizes[size].title}`}
        >
          Skandivexa
        </span>
        <span
          className={`font-sans font-bold tracking-normal ${
            isDark ? 'text-[#D97D30]' : 'text-[#C26E26]'
          } ${textSizes[size].sub}`}
        >
          konsult AB
        </span>
      </div>
    </div>
  );
};
