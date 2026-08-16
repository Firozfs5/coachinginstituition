import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variantStyles = {
    primary: 'bg-brand-navy-100 text-brand-navy-900 border border-brand-navy-200',
    red: 'bg-brand-red-50 text-brand-red-700 border border-brand-red-200',
    gold: 'bg-brand-gold-50 text-brand-gold-800 border border-brand-gold-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    dark: 'bg-brand-navy-900 text-white border border-brand-navy-800',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${variantStyles[variant] || variantStyles.primary} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
