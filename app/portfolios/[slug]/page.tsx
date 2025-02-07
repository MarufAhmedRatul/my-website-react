import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Team Members", value: "50+" },
  { label: "Happy Clients", value: "150+" },
]

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
  },
  {
    title: "Quality",
    description: "We deliver excellence in every project we undertake.",
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to achieve the best results.",
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of professional ethics.",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "About", href: "/about" }]} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">We're a team of creative minds</h1>
            <p className="text-gray-400 text-lg mb-8">
              Enver studio is a digital powerhouse that brings together the best talents in design, development, and
              creative services. We're passionate about creating exceptional digital experiences that help businesses
              thrive.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-900/50">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button size="lg">Join Our Team</Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Team at work"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-900/50">
                <CheckCircle className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-12 rounded-2xl bg-slate-900/50">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their digital presence with us.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </div>
    </main>
  )
}

