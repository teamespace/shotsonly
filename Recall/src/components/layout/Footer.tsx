export function Footer() {
  return (
    <footer className="bg-black text-[#EDEDED] border-t-[3px] border-black pt-[3.2rem] pb-[2.4rem]">
      <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto">
        <div className="flex flex-wrap gap-[2.4rem] justify-between mb-[2.4rem]">
          <div>
            <p className="font-display font-extrabold text-[1.5rem] text-yellow flex items-center gap-[0.55rem]">
              <span className="w-[38px] h-[38px] bg-pink border-[3px] border-black rounded-[10px] shadow-[3px_3px_0_rgba(255,255,255,0.25)] grid place-items-center shrink-0 text-white text-[1.15rem] -rotate-[6deg]" aria-hidden="true">?</span> 
              Recall
            </p>
            <p className="mt-[0.6rem] max-w-[19rem] text-[0.92rem] text-[#B9B9B9]">The AI study buddy that turns whatever you've got into whatever gets you the A.</p>
          </div>
          <div className="flex gap-[3.2rem] flex-wrap">
            <div>
              <h4 className="font-display font-extrabold text-[0.85rem] uppercase tracking-[0.1em] text-pink mb-[0.8rem]">Product</h4>
              <ul className="list-none flex flex-col gap-[0.5rem] text-[0.93rem]">
                <li><a href="#features" className="text-[#EDEDED] no-underline hover:text-yellow hover:underline">Features</a></li>
                <li><a href="#how" className="text-[#EDEDED] no-underline hover:text-yellow hover:underline">How it works</a></li>
                <li><a href="#pricing" className="text-[#EDEDED] no-underline hover:text-yellow hover:underline">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-extrabold text-[0.85rem] uppercase tracking-[0.1em] text-pink mb-[0.8rem]">Students</h4>
              <ul className="list-none flex flex-col gap-[0.5rem] text-[0.93rem]">
                <li><a href="#main" className="text-[#EDEDED] no-underline hover:text-yellow hover:underline">Study guides</a></li>
                <li><a href="#main" className="text-[#EDEDED] no-underline hover:text-yellow hover:underline">Campus ambassadors</a></li>
                <li><a href="#main" className="text-[#EDEDED] no-underline hover:text-yellow hover:underline">Help center</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-dashed border-[#4A4A4A] pt-[1.5rem] flex flex-wrap gap-[0.8rem] justify-between text-[0.85rem] text-[#B9B9B9]">
          <p>An Elux concept &mdash; Dribbble shot series</p>
          <p>&copy; 2026 Recall (a fictional product)</p>
        </div>
      </div>
    </footer>
  );
}
