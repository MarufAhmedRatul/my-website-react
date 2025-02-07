"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Enver Is The Best Choice?</h2>
          <p className="text-gray-400">
            Watch this one minute video so you understand why you should use our services!
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
          {!isPlaying ? (
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20Page.jpg-QO1AZb4LzGwwZun4snB8spX0WpdYjo.jpeg"
                alt="Video thumbnail"
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </button>
            </div>
          ) : (
            <video className="w-full aspect-video" controls autoPlay src="/video-placeholder.mp4" />
          )}
        </div>
      </div>
    </section>
  )
}

