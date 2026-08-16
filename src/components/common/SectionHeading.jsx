import React from 'react';

export const SectionHeading = ({ 
  badge, 
  title, 
  kannadaSubtitle,
  kannadaTitle,
  description, 
  centered = true,
  alignment,
  dark = false,
  light = false
}) => {
  const isCentered = alignment ? alignment === 'center' : centered;
  const isDark = dark || light;
  const kannada = kannadaSubtitle || kannadaTitle;

  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${isCentered ? 'mx-auto text-center' : 'text-left'}`}>
      {/* Badge */}
      {badge && (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
          isDark 
            ? 'bg-crimson-900/60 text-crimson-300 border border-crimson-700/50' 
            : 'bg-navy-100 text-navy-900 border border-navy-200'
        }`}>
          {badge}
        </div>
      )}

      {/* Main Title */}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
        isDark ? 'text-white' : 'text-navy-950'
      }`}>
        {title}
      </h2>

      {/* Kannada Subtitle */}
      {kannada && (
        <p className={`text-sm sm:text-base font-kannada font-medium mt-1.5 ${
          isDark ? 'text-amber-300' : 'text-crimson-700'
        }`}>
          {kannada}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}

      {/* Decorative Underline Accent */}
      <div className={`mt-4 flex items-center gap-1.5 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-1 rounded-full bg-crimson-600"></div>
        <div className="w-3 h-1 rounded-full bg-amber-500"></div>
        <div className="w-1.5 h-1 rounded-full bg-navy-800"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
