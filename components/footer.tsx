import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="font-bold text-xl">Maruf Ahmed</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </nav>

          <div className="mt-4 md:mt-0 text-sm text-gray-400">© { new Date().getFullYear() } Maruf Ahmed. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

