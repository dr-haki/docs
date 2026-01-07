

import { Card, Cards } from "fumadocs-ui/components/card";
import { Badge } from "../components/ui/badge"
import Nav from "../components/ui/nav"
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { Callout } from "fumadocs-ui/components/callout";
import { BackgroundPattern } from "../components/background/background-pattern";

export default function CommunityPage() {
  return (
    <main className="flex flex-col flex-1">
        {/* Nav */}
        <div className="container mx-auto px-4">
            <Nav />
        </div>
        <div className="community community__container overflow-hidden flex flex-col justify-center items-center w-full bg-transparent/10 relative">
            <div className="community community__hero h-[38vh] flex flex-col justify-center items-center text-white">
                <h1>Community</h1>
                <p>Join the Space Jazz Farmer Collective, and play some tech jazz with nature.</p>
            </div>
            <div className="community community__merch flex flex-col py-4 justify-center items-center">
                <h3>Shop our new collection of Merch</h3>
            </div>
            <div className="community community__social-media flex items-stretch">
                <div className="community community__social-media--link">
                    <h2 className="community community__social-media--link__logo">Logo here</h2>
                    <div className="community community__social-media--link__text">Join the Network</div>
                </div>
                <div className="community community__social-media--link">
                    <h2 className="community community__social-media--link__logo">Logo here</h2>
                    <div className="community community__social-media--link__text">Join the Network</div>
                </div>
                <div className="community community__social-media--link">
                    <h2 className="community community__social-media--link__logo">Logo here</h2>
                    <div className="community community__social-media--link__text">Join the Network</div>
                </div>
            </div>
        </div>
    </main>

  )
}