"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Plus, Circle } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Craft Your Digital Ecosystem</h1>
            <p className="text-lg text-gray-400 max-w-lg !mb-6">I build fast, responsive websites and intuitive interfaces that get results. Mixing clean code with creative design to craft solutions tailored to your brand. From full site builds to targeted upgrades—focused on quality, precision, and boosting your online impact.</p>

            <Link href='/services'>
              <Button className="group" size="lg">
                Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-md">
              <Image
                src="/maruf-ahmed.jpg"
                alt="Maruf Ahmed"
                fill
                className="object-contain floating rounded-md"
                priority
              />
              <Circle className="absolute top-0 right-0 text-white animate-pulse" />
              <Plus className="absolute bottom-0 left-0 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
    </section>
  )
}

