

import { Card, Cards } from "fumadocs-ui/components/card";
import { Badge } from "../components/ui/badge"
import Nav from "../components/ui/nav"
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { Callout } from "fumadocs-ui/components/callout";
import { BackgroundPattern } from "../components/background/background-pattern";
import ReactPlayer from 'react-player'

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">
        {/* Nav */}
        <div className="container mx-auto px-4">
            <Nav />
        </div>

        {/* Content */}
        <div className="About__container">
            <BackgroundPattern />
            <article className="max-w-3xl py-12 md:py-20 lg:py-28 space-y-16">
            
            {/* Header */}
            <section className="mb-16 mt-16 text-center">
                <Badge variant="secondary" className="w-fit">
                About
                </Badge>
                <h1 className="DrHeroTitle">
                Linking Tao
                </h1>
                <p className="HeroSubtitle">
                Linking Tao is a living research project exploring how food, technology,
                and human systems grow together.
                </p>
            </section>

            <hr />

            <section className="space-y-6">
                <h2 className="dr-h2">
                Philosophy
                </h2>
                <p className="dr-body">
                Linking Tao exists at the intersection of hydroponics, computer science,
                and systems thinking. It treats farming as an intelligent system,
                technology as a collaborator, and learning as an open process.
                </p>
                <p className="dr-body">
                The project embraces openness, experimentation, and observation over
                optimization for its own sake. Progress comes from understanding
                relationships—between plants and sensors, code and environment,
                people and food.
                </p>
            </section>

            {/* Core Values */}
            <section className="space-y-6">
                <h2 className="dr-h2">
                Core Values
                </h2>

                <div className="grid gap-6">
                <Cards>
                    <Card title="Open Source">
                        Knowledge grows when shared. Code, designs, data, and ideas
                        developed here are open by default, supporting collaboration
                        between technology and agriculture.
                    </Card>
                </Cards>

                <Cards>
                    <Card title="Self-Sustainability">
                        Growing food is an act of independence and care. Linking Tao aims
                        to help people understand systems deeply enough to grow their
                        own food and reduce their environmental impact.
                    </Card>
                </Cards>

                <Cards>
                    <Card className="pt-6 space-y-2" title="Technology as Instrument">
                        IoT and automation are tools for precision and balance, not
                        control. When technology and biology work together, farming
                        becomes a symphony rather than a struggle.
                    </Card>
                </Cards>
                </div>
            </section>

            <hr />

            {/* FAQ */}
            <section className="space-y-6">
                <h2 className="dr-h2">
                    FAQ
                </h2>
                <Accordions type="multiple">
                    <Accordion className="DrAccordion" title="What is Linking Tao?">A digital garden of interconnected notes on programming, farming, philosophy, and jazz</Accordion>
                    <Accordion className="DrAccordion"  title="How can I get News from the project?">Follow the daily logs Twitter thread where experiments, failures and growth is documented.</Accordion>
                    <Accordion className="DrAccordion"  title="What does the Newsletter contain?">A weekly newsletter distilling patterns and lessons</Accordion>
                </Accordions>
            </section>

            {/* Closing */}
            <Callout title="Work in progress" type="warning">
                Linking Tao is not a finished product. It is an ongoing experiment—a
                record of learning in public, growing systems slowly, and listening
                closely to what both plants and machines are telling us.
            </Callout>

            </article>
        </div>
        </main>

  )
}