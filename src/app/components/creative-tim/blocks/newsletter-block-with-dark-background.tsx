"use client"

import { Cards, Card } from "fumadocs-ui/components/card"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"

export default function NewsletterBlockWithDarkBackground() {
  return (
    <section className="Newsletter__container py-22 px-10">
      <div className="container mx-auto">
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
