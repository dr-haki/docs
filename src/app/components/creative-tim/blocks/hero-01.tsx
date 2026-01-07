"use client"

import * as React from "react"
import { Box, Files, FileText, Flame, Home, Info, Menu, User, X } from "lucide-react"

import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import Nav from "../../ui/nav"
import { Banner } from 'fumadocs-ui/components/banner';
import DrBanner from "../../ui/drBanner"
import { BackgroundPattern } from "../../background/background-pattern"
import { useRouter } from "next/navigation"

export default function Hero01() {
  const router = useRouter();
  
  return (
    <header className="relative">
      <div className="container mx-auto px-4">
        <Nav />
      </div>
      <DrBanner />
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <BackgroundPattern />
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5">
            <Info className="h-3.5 w-3.5" />
            Join the Jazz
          </Badge>
          <h1 className="DrHeroTitle">
            Smarter Farming. <br /> Stronger Harvests.
          </h1>
          <p className="HeroSubtitle">
            Notes, systems, and experiments on growing food with intelligence.
          </p>
            <div className="flex items-center justify-center sm:flex-row">
              <Button
                type="submit"
                size="lg"
                className="w-full shrink-0 sm:w-auto"
                onClick={() => router.push("/docs/computer-science/quick-start")}
              >
               Explore the Docs
              </Button>
            </div>
        </div>
        <div className="relative h-[40vh] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85"
            alt="Modern architecture and design"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </header>
  )
}
