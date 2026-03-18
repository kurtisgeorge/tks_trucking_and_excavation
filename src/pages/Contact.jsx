import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="w-full flex flex-col font-sans bg-white min-h-[90vh]">
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-5 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col pt-0 md:pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark mb-4 md:mb-6 leading-tight">
              Get in touch
            </h1>
            <p className="text-base md:text-lg text-brand-dark mb-10 md:mb-16 leading-relaxed font-medium">
              Reach out for quotes, service inquiries, partnerships, or driving opportunities with TK's Trucking.
            </p>
            
            <div className="flex flex-col gap-8 md:gap-10">
              {/* Email */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-brand-dark text-brand-dark">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-[15px] text-brand-dark font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">name@company.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-brand-dark text-brand-dark">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-[15px] text-brand-dark font-bold uppercase tracking-wider mb-1">Phone number</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">+1 (555) 000-0000</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-brand-dark text-brand-dark">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-[15px] text-brand-dark font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg mb-2">St John's, NL</p>
                  <a href="#" className="group inline-flex items-center font-bold text-brand-dark hover:text-brand-primary text-sm md:text-[15px] transition-colors">
                    See on map <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Form) */}
          <div className="w-full lg:w-[55%]">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
