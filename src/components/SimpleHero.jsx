export default function SimpleHero({ title, description, theme = 'light', compact = false }) {
  const dark = theme === 'dark';
  return (
    <section className={`${dark ? 'bg-brand-dark' : 'bg-white'} pt-8 md:pt-12 ${compact ? 'pb-4 md:pb-6' : 'pb-12 md:pb-16'} px-5 md:px-8 flex flex-col items-center text-center`}>
      <h1 className={`text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight ${dark ? 'text-white' : 'text-brand-dark'} mb-4 md:mb-6 text-balance leading-tight`}>
        {title}
      </h1>
      {description && (
        <p className={`text-base md:text-lg ${dark ? 'text-white' : 'text-brand-dark'} max-w-2xl leading-relaxed text-balance font-medium`}>
          {description}
        </p>
      )}
    </section>
  );
}
