import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">&copy; 2025 FinQuest. All rights reserved.</p>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram size={24} />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

