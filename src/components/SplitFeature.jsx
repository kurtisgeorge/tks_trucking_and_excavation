import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function SplitFeature({
  tagline,
  title,
  description,
  listItems = [],
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = "Feature image",
  imagePosition = "right",
  theme = "light",
  buttonVariant = "link",
  titleTag = "h2",
  placeholder = false,
  imageObjectFit = "cover",
  imageObjectPosition = "center",
  className = ""
}) {
  const isDark = theme === 'dark';
  const flexDir = imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row';
  const TitleTag = titleTag;


  const bgClass = isDark ? 'bg-brand-dark' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-brand-dark';

  const textDirection = imagePosition === 'left' ? 'left' : 'right';
  const imageDirection = imagePosition === 'left' ? 'right' : 'left';

  return (
    <section className={`py-16 md:py-24 px-5 md:px-8 flex justify-center ${bgClass} ${className}`}>
      <div className={`max-w-7xl w-full flex flex-col ${flexDir} gap-12 md:gap-16 lg:gap-20 items-center`}>
        {/* Text Column */}
        <FadeIn direction={textDirection} delay={0.1} className="w-full md:w-1/2 flex flex-col items-start order-1">
          {tagline && (
            <span className="font-bold text-xs uppercase tracking-widest text-brand-primary mb-3 md:mb-4 block">
              {tagline}
            </span>
          )}
          <TitleTag className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight ${textClass}`}>
            {title}
          </TitleTag>
          <p className={`text-[15px] md:text-lg mb-6 md:mb-8 leading-relaxed font-medium ${textClass}`}>
            {description}
          </p>
          
          {listItems && listItems.length > 0 && (
            <ul className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10 pl-5 list-disc">
              {listItems.map((item, idx) => (
                <li key={idx} className={`font-medium text-[15px] md:text-[17px] ${textClass}`}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          
          {buttonText && buttonLink && (
            buttonVariant === 'link' ? (
              <Link to={buttonLink} className={`group inline-flex items-center text-base md:text-lg font-bold mt-auto ${textClass} hover:text-brand-primary transition-colors`}>
                {buttonText} <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : buttonVariant === 'primary' ? (
              <Link to={buttonLink} className="inline-block text-center w-full md:w-auto bg-brand-primary text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg hover:-translate-y-1 transition-transform shadow-lg mt-auto text-base md:text-[17px]">
                {buttonText}
              </Link>
            ) : (
              <Link to={buttonLink} className={`inline-block text-center w-full md:w-auto font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg hover:-translate-y-1 transition-transform shadow-lg mt-auto text-base md:text-[17px] ${isDark ? 'bg-white text-brand-dark border-2 border-brand-dark' : 'bg-brand-dark text-white border-2 border-white'}`}>
                {buttonText}
              </Link>
            )
          )}
        </FadeIn>

        {/* Image Column */}
        <FadeIn direction={imageDirection} delay={0.2} className="w-full md:w-1/2 aspect-[4/3] md:aspect-square relative order-2 flex-shrink-0">
          {placeholder ? (
            <div className={`w-full h-full flex items-center justify-center border-4 rounded-2xl ${isDark ? 'border-white' : 'border-brand-dark'}`}>
              <span className={`font-bold uppercase tracking-widest ${textClass}`}>Image Placeholder</span>
            </div>
          ) : imageSrc ? (
            <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl">
              <img src={imageSrc} alt={imageAlt} className={`absolute inset-0 w-full h-full ${imageObjectFit === 'contain' ? 'object-contain' : 'object-cover'}`} style={{ objectPosition: imageObjectPosition }} />
            </div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
