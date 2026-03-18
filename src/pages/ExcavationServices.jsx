import SimpleHero from '../components/SimpleHero';
import SplitFeature from '../components/SplitFeature';
import CallToAction from '../components/CallToAction';

import imgAerial from '../assets/images/construction-aerial.jpg';
import imgCat from '../assets/images/cat-bulldozer.jpg';

export default function ExcavationServices() {
  return (
    <div className="w-full flex flex-col font-sans">
      <SimpleHero 
        title="Excavation Services"
        description="Professional, dependable excavation for projects large and small. Serving Newfoundland to Ontario."
      />

      <SplitFeature 
        title="Modern machines, skilled hands"
        description="We handle excavation work with the same professionalism and dependability that define TK's Trucking & Excavation. From site prep to heavy earthwork, we bring skilled operators and well-maintained equipment to every job."
        imageSrc={imgAerial}
        imageAlt="Aerial view of construction site"
        imagePosition="right"
        theme="dark"
      />

      <SplitFeature 
        tagline="Standards"
        title="Safety and quality"
        description="We work to professional standards and regulatory requirements on every site. Our operators are trained, our equipment is maintained, and we take site safety seriously."
        listItems={[
          "Flexible scheduling and routing",
          "Custom load planning and coordination",
          "Direct communication with your team"
        ]}
        imageSrc={imgCat}
        imageAlt="Close up of CAT bulldozer tracks"
        imagePosition="left"
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
