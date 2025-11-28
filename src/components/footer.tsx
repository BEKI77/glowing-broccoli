import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

import { logo_image } from "@/constants/images-links";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-background ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo_image}
                alt="logo image"
                width={40}
                height={40}
                className="object-contain rounded-full"
              />

              <span className="text-xl font-bold">MH Furniture</span>
            </div>
            <p className=" text-sm text-justify">
              Crafting beautiful, handmade furniture for over 25 years. Each
              piece is built with passion, precision, and pride.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/17DoMMDj6o/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mh_furniture_et?igsh=aDJ2OHZpN3ZpZ2pr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mh_furniture?_t=ZM-8yoxXQcDLA0&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block  text-sm">
                Home
              </a>
              <a href="/about" className="block text-sm">
                About Us
              </a>
              <a href="/gallery" className="block text-sm">
                Gallery
              </a>
              <a href="/contact" className="block text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className=" text-sm">Custom Furniture</p>
              <p className=" text-sm">Furniture Repair</p>
              <p className=" text-sm">Design Consultation</p>
              <p className=" text-sm">Delivery & Setup</p>
              <p className=" text-sm">Maintenance Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-700" />
                <span className=" text-sm">
                  Workshop akaki kaliti industry mender
                  <br />
                  Showroom tulu dimtu alem bank road
                </span>
              </div>
              <div className=" space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-700" />
                  <span className=" text-sm">0963970000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-700" />
                  <span className=" text-sm">0963980000</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-700" />
                <span className="text-sm">
                  mhfurnituremanufacturing@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className=" text-sm">
              © 2024 MH Furniture Shop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm">
                Privacy Policy
              </a>
              <a href="#" className=" text-sm">
                Terms of Service
              </a>
              <a href="#" className=" text-sm">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
