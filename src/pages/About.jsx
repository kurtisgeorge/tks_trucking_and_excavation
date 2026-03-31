import SimpleHero from '../components/SimpleHero';
import SplitFeature from '../components/SplitFeature';
import CallToAction from '../components/CallToAction';

import familyPhoto from '../assets/images/family_photo.jpg';
import keithPhoto from '../assets/images/keith.webp';
import tinaPhoto from '../assets/images/tina.webp';
import janeenPhoto from '../assets/images/janeen.jpg';
import jasonPhoto from '../assets/images/jason.jpg';
import jessPhoto from '../assets/images/jess.jpg';

export default function About() {
  return (
    <div className="w-full flex flex-col font-sans">
      <SimpleHero 
        title="About us"
        description="Family-run since day one. Newfoundland roots. Ontario reach. Reputation earned."
      />

      <SplitFeature 
        tagline="Our story"
        title="Built on trust and hard work"
        description="TK's Trucking started in Newfoundland with a simple commitment to do the work right and keep our word. Today we serve clients across Canada, but our values haven't changed."
        listItems={[
          "Family-owned and operated",
          "Serving Eastern Canada with pride",
          "Grounded in dependable service"
        ]}
        imageSrc={familyPhoto}
        imageAlt="The TK's Trucking family"
        imagePosition="right"
        theme="dark"
        imageObjectFit="contain"
      />

      {/* Meet the team */}
      <section className="bg-white py-16 md:py-24 px-5 md:px-8 w-full border-b-2 border-brand-dark">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-4 md:mb-6">
            Meet the team
          </h2>
          <p className="text-base md:text-lg text-brand-dark font-medium mb-12 md:mb-20 max-w-2xl">
            The people who built this company and keep it running strong
          </p>

          <div className="w-full flex flex-wrap justify-center gap-12 md:gap-8">
            {[
              { name: "Keith",  title: "Owner",                   photo: keithPhoto },
              { name: "Tina",   title: "Owner",                   photo: tinaPhoto },
              { name: "Janeen", title: "Office Manager",          photo: janeenPhoto },
              { name: "Jess",   title: "Operations Manager",      photo: jessPhoto },
              { name: "Jason",  title: "Health & Safety Advisor", photo: jasonPhoto },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center flex-[0_1_200px]">
                <div className="w-full aspect-square max-w-[280px] md:max-w-none rounded-2xl mb-6 md:mb-8 overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-1 md:mb-2">{member.name}</h4>
                <p className="text-sm md:text-[15px] font-medium text-brand-dark">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Drive with us"
        subtitle="We're looking for experienced drivers who value professionalism and respect."
        buttonText="Contact"
        buttonLink="/contact"
      />
    </div>
  );
}
