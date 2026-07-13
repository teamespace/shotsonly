import { Logo } from './Logo';

export function Footer() {
  return (
    <footer id="footer" className="bg-white text-gray-500 py-16 text-sm relative z-10 -mt-10">
      <div className="max-w-[1200px] mx-auto px-6 pt-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16 pb-8">
          
          <div className="max-w-xs flex flex-col justify-between h-full">
            <div>
              <a href="#top" className="w-12 h-12 bg-black rounded-[0.7rem] flex items-center justify-center text-white mb-8">
                <Logo className="w-6 h-6 text-white" />
              </a>
              <p className="leading-relaxed mb-12">
                For those who want full access to every feature personalized tools, guided paths, and unlimited calm to support
              </p>
              <div className="flex gap-6 mb-16 lg:mb-0">
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.45 4.35-3.5 5.25-2.03.88-4.52.88-6.52-.16-1.95-.99-3.23-2.91-3.41-5.1-.21-2.43.91-4.83 2.91-6.13 1.95-1.29 4.49-1.49 6.64-.53.11-.08.11-.2.11-.29V6.04c-1.32.33-2.73.34-4.07.13-1.61-.25-3.15-.99-4.29-2.14-1.2-1.2-1.91-2.83-2.05-4.53h4.04c.08 1.41.67 2.78 1.68 3.73 1.05.99 2.5 1.51 3.96 1.51.13 0 .22-.11.22-.24-.03-1.49-.02-2.98-.02-4.47z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="font-semibold text-gray-800 mt-auto pt-8 hidden lg:block">
              © Vellum 2026 - All Right Reserved
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Product</h4>
              <ul className="space-y-4">
                {['Overview', 'Explorer', 'Console', 'Pricing', 'Security & Audits', 'Status', 'Consultation'].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Developers</h4>
              <ul className="space-y-4">
                {['Docs', 'SDKs & Templates', 'Quickstart', 'RPC Endpoints', 'Run a Validator'].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Solutions</h4>
              <ul className="space-y-4">
                {['Payments & Remittance', 'DeFi & Exchanges', 'Gaming & Loyalty', 'Supply Chain', 'Identity & Access', 'Public Sector'].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        
        <div className="pt-8 text-sm flex justify-between items-center lg:hidden">
          <p className="font-semibold text-gray-800">© Vellum 2026 - All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
