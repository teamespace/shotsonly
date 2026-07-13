import React from 'react';

export default function SectionDivider({ num, title }: { num: string, title: string }) {
  return (
    <div className="flex items-center justify-center py-12 bg-[#fafafa]">
      <div className="text-xs font-semibold tracking-widest text-gray-400 uppercase flex items-center gap-4">
        <span className="text-black font-bold">[ {num} ]</span>
        <span className="w-px h-3 bg-gray-300"></span>
        {title}
      </div>
    </div>
  );
}
