import Breadcrumb from "@/components/breadcrumb"
import ServicesSection from "@/components/services-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Services", href: "/services" }]} />
        </div>

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg mb-8">
            We provide comprehensive digital solutions to help your business grow. Our team of experts delivers
            high-quality services tailored to your needs.
          </p>
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <ServicesSection />

        <div className="mt-16 p-8 rounded-2xl bg-slate-900/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and how we can help bring your vision to life.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </main>
  )
}

