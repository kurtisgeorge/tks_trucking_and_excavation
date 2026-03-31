import FadeIn from './FadeIn';

export default function MapFeature({ tagline, title, description, imageSrc }) {
  return (
    <section className="bg-brand-dark text-white py-16 md:py-24 px-5 md:px-8 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center">
        <FadeIn direction="right" delay={0.1} className="w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-12">
           {tagline && <span className="font-bold text-xs uppercase tracking-widest text-brand-primary mb-3 md:mb-4 block">{tagline}</span>}
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight text-white">
              {title}
           </h2>
           <p className="text-[15px] md:text-lg text-white leading-relaxed font-medium">
              {description}
           </p>
        </FadeIn>
        <FadeIn direction="left" delay={0.2} className="w-full md:w-1/2 w-full">
           {imageSrc && (
             <div className="w-full aspect-[4/3] md:aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
               <img src={imageSrc} alt="Reach map" className="absolute inset-0 w-full h-full object-cover" />
             </div>
           )}
        </FadeIn>
      </div>
    </section>
  );
}
