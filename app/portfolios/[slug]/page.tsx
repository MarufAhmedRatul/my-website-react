import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // In a real app, fetch project data based on the slug
  const project = {
    title: "Mobile App Design",
    category: "UI/UX Design",
    client: "Tech Startup",
    date: "2024",
    description:
      "A comprehensive mobile app design project for a tech startup, focusing on user experience and modern design principles.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Portfolio", href: "/portfolios" },
              { label: project.title, href: `/portfolios/${params.slug}` },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-12 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-400 mb-8">{project.description}</p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-slate-900/50">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400">Category</dt>
                  <dd className="font-medium">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Client</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Date</dt>
                  <dd className="font-medium">{project.date}</dd>
                </div>
              </dl>
            </div>

            <Button size="lg" className="w-full">
              View Live Project
            </Button>
          </div>
        </div>

        <div className="flex justify-between pt-8 border-t border-gray-800">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Previous Project
          </Button>
          <Button variant="outline" className="gap-2">
            Next Project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

