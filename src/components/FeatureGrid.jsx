export default function FeatureGrid({ title, description, features = [] }) {
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-8 border-y-2 border-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-base md:text-lg text-brand-dark font-medium leading-relaxed mb-12 md:mb-20 max-w-2xl">
          {description}
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
          {features.map((feature, idx) => {
             const Icon = feature.icon;
             return (
              <div key={idx} className="flex flex-col items-center">
                <div className="mb-4 md:mb-6 text-brand-primary">
                   {Icon && <Icon strokeWidth={2} className="w-12 h-12 md:w-16 md:h-16" />}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-brand-dark mb-3 md:mb-4">{feature.title}</h4>
                <p className="text-[15px] md:text-base text-brand-dark font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
