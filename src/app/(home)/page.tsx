import Footers02 from '../components/creative-tim/blocks/footers-02';
import Hero01 from '../components/creative-tim/blocks/hero-01';
import SimpleFeaturesBlockWithImage from '../components/creative-tim/blocks/simple-features-block-with-image';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <Hero01 />
      <SimpleFeaturesBlockWithImage />
      <Footers02 />
    </div>
  );
}
