
import Footers03 from '../components/creative-tim/blocks/footers-03';
import Hero01 from '../components/creative-tim/blocks/hero-01';
import NewsletterBlockWithDarkBackground from '../components/creative-tim/blocks/newsletter-block-with-dark-background';
import SimpleFeaturesBlockWithImage from '../components/creative-tim/blocks/simple-features-block-with-image';
import DrBanner from '../components/ui/drBanner';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <Hero01 />
      <NewsletterBlockWithDarkBackground />
      <SimpleFeaturesBlockWithImage />
      <Footers03 />
    </div>
  );
}
