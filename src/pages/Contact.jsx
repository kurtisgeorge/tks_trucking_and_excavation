import { Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
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
            
            <div className="flex flex-row flex-wrap gap-8 lg:flex-col lg:gap-10">
              {/* Phone */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-brand-dark text-brand-dark">
                  <Phone size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-[15px] text-brand-dark font-bold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">Office: (709) 547-2342</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">Fax: (709) 547-2585</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">After hours: (709) 427-5650</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-brand-dark text-brand-dark">
                  <Clock size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-[15px] text-brand-dark font-bold uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">Mon – Fri</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg">9:00 AM – 5:00 PM</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-brand-dark text-brand-dark">
                  <MapPin size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-[15px] text-brand-dark font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-brand-dark font-medium text-base md:text-lg mb-2">Clarenville, NL</p>
                  <a href="#" className="group inline-flex items-center font-bold text-brand-dark hover:text-brand-primary text-sm md:text-[15px] transition-colors">
                    See on map <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Form) */}
          <div className="w-full lg:w-[55%] pt-0 md:pt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
