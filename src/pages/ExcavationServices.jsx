import SimpleHero from '../components/SimpleHero';
import SplitFeature from '../components/SplitFeature';
import CallToAction from '../components/CallToAction';

import imgAerial from '../assets/images/construction-aerial.jpg';
import imgCat from '../assets/images/cat-bulldozer.jpeg';

export default function ExcavationServices() {
  return (
    <div className="w-full flex flex-col font-sans">
      <SimpleHero 
        title="Excavation Services"
        description="Professional, dependable excavation for projects large and small. Serving Clarenville and surrounding areas with experienced operators and well-maintained equipment."
      />

      <SplitFeature 
        title="From the ground up"
        description="TK's Trucking & Excavation brings the same dependable service to excavation that built our name in trucking. From site preparation and trenching to grading and drainage work, we handle each job with care, precision, and a strong focus on safety."
        imageSrc={imgAerial}
        imageAlt="Aerial view of construction site"
        imagePosition="right"
        theme="dark"
      />

      <SplitFeature 
        tagline="Standards"
        title="Safety and quality"
        description="We work to professional standards on every site. Our operators are experienced, our equipment is maintained, and every project is approached with safety, communication, and dependable execution in mind."
        listItems={[
          "Site preparation and land clearing",
          "Trenching for utilities and drainage",
          "Grading, levelling, and pad preparation"
        ]}
        imageSrc={imgCat}
        imageAlt="Close up of CAT bulldozer tracks"
        imagePosition="left"
        theme="light"
      />

      <CallToAction 
        title="Ready to get your site prepared?"
        subtitle="Get a quote for excavation, grading, trenching, or site prep in Clarenville and surrounding areas."
        buttonText="Get A Quote"
        buttonLink="/contact"
      />
    </div>
  );
}
