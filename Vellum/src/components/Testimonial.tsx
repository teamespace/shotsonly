import { Reveal } from './Reveal';
import { TextReveal } from './TextReveal';

export function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight mb-8 text-gray-900">
              <TextReveal text="Don't take our word for it. Here's what our customers are saying." />
            </h2>
            <p className="text-gray-500 text-sm max-w-sm">
              Legal teams across industries trust Vellum to close faster, catch more, and never miss what matters.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="relative pl-0 lg:pl-12">
            <div className="absolute -top-10 left-0 lg:left-8 text-8xl text-gray-100 font-serif leading-none">“</div>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight mb-10">
                We almost missed a $200K auto-renewal buried in a vendor contract. Vellum caught it. That single alert paid for the entire annual subscription.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <img key={i} className={`w-12 h-12 rounded-full border-2 border-white object-cover ${i === 3 ? 'grayscale-0 scale-110 z-10' : 'grayscale opacity-50'}`} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Avatar" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900">James Moreau</div>
                  <div className="text-sm text-gray-500">VP Legal, NovaTech Systems</div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
