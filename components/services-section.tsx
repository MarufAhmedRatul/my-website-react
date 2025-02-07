import { Code2, Palette, PenTool, Play, Camera, Video } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Development",
    description: "Create a platform with the best and coolest quality from us.",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    description: "We provide UI/UX Design services, and of course with the best quality.",
  },
  {
    icon: PenTool,
    title: "Graphik Designer",
    description: "We provide Graphic Design services, with the best designers.",
  },
  {
    icon: Play,
    title: "Motion Graphik",
    description: "Create a platform with the best and coolest quality from us.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "We provide Photography services, and of course with the best quality.",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Create a platform with the best and coolest quality from us.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Service We Provide For You</h2>
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

