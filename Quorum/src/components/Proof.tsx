import React from 'react';
import { Marquee } from './animations/Marquee';
export default function Proof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase whitespace-nowrap">
          In circulation at
        </span>
        <div className="flex-1 w-full overflow-hidden text-gray-400 font-semibold text-lg md:text-xl">
          <Marquee speed={25} gap="gap-10 md:gap-16">
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Fieldnote</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer italic font-medium">Arcadia Labs</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Bluepeak</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer italic font-medium">Standard Atlas</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Hem & Co.</span>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
