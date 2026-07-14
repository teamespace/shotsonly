import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonProps = {
  variant?: 'yellow' | 'pink' | 'white' | 'black';
  as?: 'button' | 'a';
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ variant = 'yellow', as = 'button', className = '', children, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-display font-extrabold text-[1.05rem] px-[1.7rem] py-[0.85rem] brutal-border rounded-xl cursor-pointer brutal-shadow-sm transition-transform transition-shadow transition-colors hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_var(--color-black)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--color-black)] focus-visible:outline-[4px] focus-visible:outline-pink focus-visible:outline-offset-[3px]";
  
  const variants = {
    yellow: "bg-yellow text-black",
    pink: "bg-pink text-white",
    white: "bg-white text-black",
    black: "bg-black text-yellow hover:bg-[#000]"
  };

  const Component = as as any;

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
