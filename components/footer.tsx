import Link from "next/link"
import { Hammer, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-700 p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MH Furniture</span>
            </div>
            <p className="text-gray-300 text-sm">
              Crafting beautiful, handmade furniture for over 25 years. Each piece is built with passion, precision, and
              pride.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm">
                About Us
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white text-sm">
                Products
              </Link>
              <Link href="/gallery" className="block text-gray-300 hover:text-white text-sm">
                Gallery
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Custom Furniture</p>
              <p className="text-gray-300 text-sm">Furniture Repair</p>
              <p className="text-gray-300 text-sm">Design Consultation</p>
              <p className="text-gray-300 text-sm">Delivery & Setup</p>
              <p className="text-gray-300 text-sm">Maintenance Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-700" />
                <span className="text-gray-300 text-sm">
                  Workshop akaki kaliti industry mender
                  <br />
                  Showroom tulu dimtu alem bank road
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-700" />
                <span className="text-gray-300 text-sm">0911466800</span>
                <span className="text-gray-300 text-sm">0955421259</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-700" />
                <span className="text-gray-300 text-sm">Mhfurniture2006@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 MH Furniture Shop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
