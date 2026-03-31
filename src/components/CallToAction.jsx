import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function CallToAction({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-brand-dark py-16 md:py-24 px-5 md:px-8 text-center flex flex-col items-center">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 text-white leading-tight">
            {title}
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-8 md:mb-10">
            {subtitle}
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.3} className="w-full sm:w-auto">
          <Link to={buttonLink} className="inline-block w-full sm:w-auto text-center bg-brand-primary text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg hover:-translate-y-1 transition-transform shadow-lg text-base md:text-[17px]">
            {buttonText}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
