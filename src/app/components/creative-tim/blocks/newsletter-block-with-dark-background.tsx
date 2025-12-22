"use client"

import { Cards, Card } from "fumadocs-ui/components/card"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"

export default function NewsletterBlockWithDarkBackground() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
            <h2 className="text-2xl font-bold">
              Join the Space Jazz Farmers Collective Newsletter
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-balance">
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
                variant="secondary"
                className="shrink-0"
              >
                Subscribe
              </Button>
            </form>
      </div>
    </section>
  )
}
