import Breadcrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-gray-400 text-lg mb-8">
              Have a project in mind? Let's talk about how we can help bring your ideas to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-400">123 Design Street, Creative City, 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@enver.studio</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (234) 567-8900</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help?" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

