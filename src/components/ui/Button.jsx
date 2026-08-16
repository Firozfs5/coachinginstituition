import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
    xl: 'px-8 py-4 text-lg gap-3',
  };

  const variantStyles = {
    primary: 'bg-brand-red-600 hover:bg-brand-red-700 active:bg-brand-red-800 text-white shadow-md hover:shadow-lg focus:ring-brand-red-500 border border-transparent',
    navy: 'bg-brand-navy-900 hover:bg-brand-navy-800 active:bg-brand-navy-950 text-white shadow-md hover:shadow-lg focus:ring-brand-navy-700 border border-transparent',
    gold: 'bg-brand-gold-500 hover:bg-brand-gold-600 active:bg-brand-gold-700 text-brand-navy-950 shadow-md font-bold focus:ring-brand-gold-400 border border-transparent',
    outline: 'bg-white hover:bg-slate-50 text-brand-navy-900 border-2 border-brand-navy-900 focus:ring-brand-navy-700',
    outlineWhite: 'bg-transparent hover:bg-white/10 text-white border-2 border-white/80 hover:border-white focus:ring-white',
    outlineRed: 'bg-white hover:bg-brand-red-50 text-brand-red-600 border-2 border-brand-red-600 focus:ring-brand-red-400',
    secondary: 'bg-brand-navy-50 hover:bg-brand-navy-100 active:bg-brand-navy-200 text-brand-navy-900 border border-brand-navy-200 focus:ring-brand-navy-300',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 active:bg-slate-200 focus:ring-slate-400',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
