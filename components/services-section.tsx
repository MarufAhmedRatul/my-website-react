import { Code2, Palette, PenTool, ChartNoAxesCombined, Facebook, SearchCode } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Clean, responsive websites built for speed, functionality, and seamless cross-device compatibility.",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Intuitive, visually engaging interfaces designed to elevate user experience and brand alignment.",
  },
  {
    icon: PenTool,
    title: "Custom Solution",
    description: "Bespoke digital tools tailored to solve your unique business challenges and workflows.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Google Ads Management",
    description: "Strategic campaigns targeting high-intent audiences to drive clicks, conversions, and measurable ROI.",
  },
  {
    icon: Facebook,
    title: "Facebook & Insta Ads",
    description: "High-converting social ads crafted to boost engagement, traffic, and social-driven sales.",
  },
  {
    icon: SearchCode,
    title: "Search Engine Optimization",
    description: "Technical optimizations and keyword strategies to improve rankings and attract sustainable organic traffic.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Service I Provide For You</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

