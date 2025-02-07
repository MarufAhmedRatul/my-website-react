"use client"

import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/mobile-app-design",
  },
  {
    title: "Website Design",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/website-design",
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/brand-identity",
  },
  {
    title: "Motion Graphics",
    category: "Animation",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/motion-graphics",
  },
  {
    title: "Product Photography",
    category: "Photography",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/product-photography",
  },
  {
    title: "Corporate Video",
    category: "Videography",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/corporate-video",
  },
]

export default function PortfolioSection() {
  return (
    <section className="py-16" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Awesome Portofolio</h2>
            <p className="text-gray-400">Check out our latest projects</p>
          </div>
          <Link href="/portfolio" className="text-primary hover:text-primary/80 transition-colors">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <Link key={index} href={project.href} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-400">{project.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

