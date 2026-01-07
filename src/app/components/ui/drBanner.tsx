import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";
import { ArrowRight  } from "lucide-react";

export default function DrBanner() {
  
  return (
    <Banner className="DrBanner" variant="rainbow"
                  rainbowColors={[
                    '#31f38248',
                    '#31f38248',
                    'transparent',
                    '#31f38248',
                    'transparent',
                    '#31f38248',
                    'transparent',
                  ]}
          >FarmOrchestra launches in 2026 |  <Link className=" flex mx-2" href={""}> Join the waitlist <ArrowRight className="mx-1 pt-1" size={18} /></Link> </Banner>
  )
}