import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Plus, Circle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Build Your Awesome Platform</h1>
            <p className="text-lg text-gray-400 max-w-lg">
              Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will
              provide the best service for those of you who use our services.
            </p>
            <Button className="group" size="lg">
              Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
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

