"use client"

import { Cards, Card } from "fumadocs-ui/components/card"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { GrainGradient } from '@paper-design/shaders-react';
import { useEffect, useState } from "react";

export default function NewsletterBlockWithDarkBackground() {

  const [colors, setColors] = useState<string[]>([])
  const [background, setBackground] = useState<string>("")

  useEffect(() => {
    const root = getComputedStyle(document.documentElement)

    const primary = root.getPropertyValue("--grain-first-color").trim()
    const primaryForeground = root
      .getPropertyValue("--grain-second-color")
      .trim()
    const background = root.getPropertyValue("--grain-background").trim()

    setColors([primary, primaryForeground || primary])
    setBackground(background || "#1a1a1a")
  }, [])

  if (!colors.length) return null

  return (
    <section className="Newsletter__container relative">
      <GrainGradient
        width="100%"
        height={480}
        colors={colors}
        colorBack={background}
        softness={1}
        intensity={0.78}
        noise={0.17}
        shape="corners"
        speed={0.42}
        scale={1.72}
        rotation={16}
      />

      <div className="container absolute inset-0 flex flex-col items-center justify-center mx-auto px-10">
            <h3 className="dr-h3">
              Join the Space Jazz Farmers Collective Newsletter
            </h3>
            <p className="dr-body mt-5">
              A weekly note on growing food with IoT, hydroponics, and a little improvisation.
            </p>
            <form className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-x-2 gap-y-4 sm:flex-row">
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="placeholder:text-primary-foreground/60 text-primary-foreground h-11 border-white/20 bg-white/10 focus-visible:ring-white/30"
              />
              <Button
                type="submit"
                size="lg"
                variant="default"
                className="shrink-0"
              >
                Subscribe
              </Button>
            </form>
      </div>
    </section>
  )
}

