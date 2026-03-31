import HomeHero from '../components/HomeHero';
import SplitFeature from '../components/SplitFeature';
import FeatureGrid from '../components/FeatureGrid';
import MapFeature from '../components/MapFeature';
import CallToAction from '../components/CallToAction';
import { CalendarCheck, HardHat, Settings, Home as HomeIcon, ArrowRight } from 'lucide-react';

import imgHero from '../assets/images/truck-fleet.jpg';
import imgTrucking from '../assets/images/mountain-truck.jpg';
import imgExcavation from '../assets/images/excavator-dump-truck.jpg';
import imgMap from '../assets/images/coastal-highway.jpg';

export default function Home() {
  return (
    <div className="w-full flex flex-col font-sans">
      <HomeHero 
        title="Built on solid ground and reputation"
        description="TK's Trucking & Excavation serves clients across Newfoundland to Ontario with reliable transportation and excavation services. We move what matters and build what's needed."
        buttonText="Quote"
        buttonLink="/contact"
        imageSrc={imgHero}
      />

      <SplitFeature 
        tagline="Capability"
        title="Hauling solutions built for your needs"
        description="We handle a wide range of freight across Canada. From standard loads to specialized hauling, we have the capacity and expertise to move what matters."
        listItems={[
          "Less-than-truckload (LTL) shipments",
          "Temperature-controlled freight",
          "Dry freight services"
        ]}
        buttonText="Trucking Services"
        buttonLink="/trucking"
        imageSrc={imgTrucking}
        imageAlt="Truck driving through mountains"
        imagePosition="left"
        theme="dark"
        buttonVariant="link"
      />

      <SplitFeature 
        tagline="Capability"
        title="Earthmoving and foundational work"
        description="Whether it's preparing a site for construction or large-scale earthmoving, our modern fleet and experienced operators deliver reliable results."
        listItems={[
          "Site preparation and land clearing",
          "Trenching for utilities and drainage",
          "Grading, levelling, and pad preparation"
        ]}
        buttonText="Excavation Services"
        buttonLink="/excavation"
        imageSrc={imgExcavation}
        imageAlt="Excavator loading a dump truck"
        imagePosition="right"
        theme="dark"
        buttonVariant="link"
        imageObjectPosition="center 80%"
      />

      <FeatureGrid 
        title="What sets us apart"
        description="We deliver on our commitments. Every load, every route, every time."
        features={[
          {
            icon: CalendarCheck,
            title: "Reliable service",
            description: "On-time delivery and dependable operations, every load, every route. We do what we say we'll do."
          },
          {
            icon: HardHat,
            title: "Experienced staff",
            description: "Skilled operators and trained drivers who take their work seriously and handle your freight or site with care."
          },
          {
            icon: Settings,
            title: "Modern equipment",
            description: "Well-maintained trucks and excavation equipment, inspected regularly and ready for the job."
          }
        ]}
      />

      <MapFeature 
        tagline="Reach"
        title="Newfoundland to Ontario"
        description="Based in Newfoundland, we move freight across all the eastern provinces as far as Ontario. Our network and experience mean your load gets where it needs to go, no matter the distance."
        imageSrc={imgMap}
      />

      {/* About Us Brief */}
      <section className="bg-white py-16 md:py-24 px-5 md:px-8 flex justify-center border-b-2 border-brand-dark">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          <div className="mb-4 md:mb-6 text-brand-primary">
             <HomeIcon strokeWidth={2} className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark mb-4 md:mb-6">
            A family-run business
          </h2>
          <p className="text-base md:text-lg text-brand-dark leading-relaxed font-medium mb-8 md:mb-10 max-w-2xl">
            TK's Trucking is a family operation rooted in reliability and respect. We move freight the way we'd want ours moved—with care, professionalism, and a commitment to getting it right.
          </p>
          <a href="/about" className="group inline-flex items-center text-brand-dark font-bold text-base md:text-lg hover:text-brand-primary transition-colors">
            About us <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <CallToAction 
        title="Ready to get started?"
        subtitle="Get a quote or discuss your transportation needs with our team."
        buttonText="Quote"
        buttonLink="/contact"
      />
    </div>
  );
}
