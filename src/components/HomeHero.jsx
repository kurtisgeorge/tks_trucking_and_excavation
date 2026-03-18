import { Link } from 'react-router-dom';

export default function HomeHero({ title, description, buttonText, buttonLink, imageSrc }) {
  return (
    <section className="w-full bg-white flex flex-col pt-6 md:pt-12 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-8 md:mb-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-[64px] font-extrabold tracking-tight text-brand-dark leading-[1.1] mb-6 text-balance">
          {title}
        </h1>
        <p className="text-base md:text-xl text-brand-dark font-medium leading-relaxed mb-10 max-w-2xl text-balance">
          {description}
        </p>
        <Link to={buttonLink} className="bg-brand-primary text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg hover:-translate-y-1 transition-transform shadow-lg w-full sm:w-auto text-base md:text-[17px] inline-block">
          {buttonText}
        </Link>
      </div>
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl">
          <img src={imageSrc} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
