import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact us for the service you want to use</h2>
          <Button size="lg" className="mt-8">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}

