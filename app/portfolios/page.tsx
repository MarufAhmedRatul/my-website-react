"use client"

import { useState } from "react"
import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "UI/UX Design",
  "Web Development",
  "Graphic Design",
  "Animation",
  "Photography",
  "Videography",
]

const projects = [
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/mobile-app-design",
  },
  {
    title: "E-commerce Website",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/e-commerce-website",
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/brand-identity",
  },
  {
    title: "Product Animation",
    category: "Animation",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/product-animation",
  },
  {
    title: "Corporate Photoshoot",
    category: "Photography",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/corporate-photoshoot",
  },
  {
    title: "Promotional Video",
    category: "Videography",
    image: "/placeholder.svg?height=600&width=400",
    href: "/portfolio/promotional-video",
  },
  // Add more projects as needed
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Portfolio", href: "/portfolio" }]} />
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-400 max-w-2xl">
            Explore our latest work across different categories. Each project represents our commitment to quality and
            innovation.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === activeCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
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

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-8">No projects found in this category.</p>
        )}
      </div>
    </main>
  )
}

