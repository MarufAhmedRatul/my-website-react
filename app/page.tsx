import HeroSection from "@/components/hero-section"
import VideoSection from "@/components/video-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import ContactSection from "@/components/contact-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}

