import SimpleHero from '../components/SimpleHero';
import SplitFeature from '../components/SplitFeature';
import CallToAction from '../components/CallToAction';

import imgNight from '../assets/images/highway-night.jpg';
import imgLoadingDock from '../assets/images/loading-dock-trailers.jpg';

export default function TruckingServices() {
  return (
    <div className="w-full flex flex-col font-sans">
      <SimpleHero 
        title="Trucking Services"
        description="Reliable freight service across Newfoundland, Ontario, and Quebec, with all points in between. We specialize in LTL shipments, temperature-controlled freight, and dry freight services."
      />

      <SplitFeature 
        title="Freight that moves on time"
        description="TK's Trucking & Excavation handles freight with the professionalism and reliability our customers depend on. From LTL shipments to temperature-controlled and dry freight, we move what matters safely and efficiently."
        listItems={[
          "Less-than-truckload shipments",
          "Temperature-controlled freight",
          "Dry freight services",
          "NL–ON / QC return loads and all points in between"
        ]}
        imageSrc={imgNight}
        imageAlt="City highway at night with light trails"
        imagePosition="left"
        theme="dark"
      />

      <SplitFeature 
        tagline="Standards"
        title="Safety and compliance built in"
        description="We operate with strict adherence to transportation regulations and safety protocols. Your freight is handled with the professionalism and care that protects both your business and the road."
        listItems={[
          "Full regulatory compliance and certifications",
          "Rigorous vehicle maintenance and inspections",
          "Experienced and trained professional drivers"
        ]}
        imageSrc={imgLoadingDock}
        imageAlt="White semi trailers at a loading dock"
        imagePosition="right"
        theme="light"
      />

      <CallToAction 
        title="Ready to move your freight"
        subtitle="Get a quote tailored to your hauling needs. Contact TK's Trucking today."
        buttonText="Inquire"
        buttonLink="/contact"
      />
    </div>
  );
}
