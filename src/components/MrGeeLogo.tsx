import React from 'react';
import mrGeeLogoImg from '../assets/images/mr_gee_logo_1790254118863.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const MrGeeLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} rounded-xl overflow-hidden bg-white border border-blue-200/80 shadow-xs shrink-0 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200`}>
        <img 
          src={mrGeeLogoImg} 
          alt="MR Gee Appliance Repair Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
              MR Gee <span className="text-blue-700">Appliance Repair</span>
            </span>
          </div>
          <p className="text-[11px] text-slate-500 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span>Fixing What Matters In Your Home!</span>
          </p>
        </div>
      )}
    </div>
  );
};
