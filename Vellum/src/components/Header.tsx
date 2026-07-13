import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#top" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <Logo className="w-6 h-6 text-oxblood" />
            Vellum
          </a>
          
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {['Capabilities', 'Procedure', 'Pricing', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="hidden md:block">
          <a href="#pricing" className="inline-block text-sm font-medium px-5 py-2.5 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors">
            Sign in
          </a>
        </div>

        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 py-4 overflow-hidden border-b border-gray-100 absolute w-full left-0 top-full"
          >
            <div className="flex flex-col gap-4">
              {['Capabilities', 'Procedure', 'Pricing', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-800">
                  {item}
                </a>
              ))}
              <a href="#pricing" onClick={() => setIsOpen(false)} className="inline-block text-sm font-medium px-5 py-2.5 rounded-full bg-gray-100 text-black text-center mt-2">
                Sign in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
