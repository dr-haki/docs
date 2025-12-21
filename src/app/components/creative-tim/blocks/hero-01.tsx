"use client"

import * as React from "react"
import { Box, Files, FileText, Flame, Home, Info, Menu, User, X } from "lucide-react"

import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"

const NAV_LIST = [
  {
    label: "Home",
    icon: Home,
    href: "/"
  },
  {
    label: "Docs",
    icon: FileText,
    href: "/docs/computer-science/quick-start"
  },
  {
    label: "Logs",
    icon: Box,
    href: "#"
  },
  {
    label: "Community",
    icon: Flame,
    href: "#"
  },
  {
    label: "About",
    icon: User,
    href: "#"
  },
]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map(({ icon: Icon, label, href }) => (
        <li key={label}>
          <a
            href={href}
            className="DrNavLink"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Nav() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setOpenNav(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className="DrNavContainer">
      <div className="relative flex items-center">
        <a href="/" className="DrHakiLogo">
          Dr<span>.</span> Haki
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Button size="sm" variant="ghost">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="ml-auto grid lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {openNav && (
        <div className="mt-4 lg:hidden">
          <NavList />
          <hr />
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="w-full">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function Hero01() {
  return (
    <header className="relative">
      <div className="container mx-auto px-4">
        <Nav />
      </div>
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5">
            <Info className="h-3.5 w-3.5" />
            HakiGrow coming soon in 2026
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
