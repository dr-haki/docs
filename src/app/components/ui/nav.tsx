"use client"

import * as React from "react"
import { Box, Files, FileText, Flame, Home, Info, Menu, User, X } from "lucide-react"

import { Badge } from "./badge"
import { Button } from "./button"
import { Input } from "./input"

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
    label: "About",
    icon: User,
    href: "/about"
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

export default function Nav() {
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
      <div className="relative flex justify-between">
        <a href="/" className="DrHakiLogo">
          Linking Tao
        </a>
        <div className="hidden lg:block">
          <NavList />
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