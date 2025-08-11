// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu, Hammer } from "lucide-react"
// import { ThemeToggle } from "./theme-toggle"
// import Image from "next/image"
// import { logo_image } from "@/constants/images-links"

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Gallary", href: "/gallary" },
//   { name: "Contact", href: "/contact" },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   return (
//     <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             {/* <div className="bg-amber-700 p-1 rounded-full flex items-center justify-center"> */}
//               <Image
//                 src={logo_image}
//                 alt="logo image"
//                 width={40}
//                 height={40}
//                 className="object-contain rounded-full"
//                 priority
//               />
//             {/* </div> */}
//             <span className="text-xl font-bold">MH Furniture</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-amber-700 ${
//                   pathname === item.href ? "text-amber-700 border-b-2 border-amber-700 pb-1" : ""
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className=" hidden md:block">
//             <div className=" flex items-center gap-3">
//               <ThemeToggle />
//               <Button asChild className="bg-amber-700 hover:bg-amber-800">
//                 <Link href="/contact">Get Quote</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//               <div className="flex flex-col space-y-4 mt-8">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`text-lg font-medium mx-auto transition-colors hover:text-amber-700 py-2 ${
//                       pathname === item.href ? "text-amber-700" : ""
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <div className="pt-4 mx-auto">
//                   <Button asChild className="bg-amber-700 hover:bg-amber-800">
//                     <Link href="/contact" onClick={() => setIsOpen(false)}>
//                       Get Quote
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, User, ImageIcon, Phone } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { logo_image } from "@/constants/images-links"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Gallery", href: "/gallary", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Phone },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop/Tablet Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg sticky top-0 z-50 md:block hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo_image || "/placeholder.svg"}
                alt="logo image"
                width={40}
                height={40}
                className="object-contain rounded-full"
                priority
              />
              <span className="text-xl font-bold">MH Furniture</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                    pathname === item.href ? "text-amber-700 border-b-2 border-amber-700 pb-1" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Bottom Navigation */}
      <div className="md:hidden">
        {/* Fixed Floating Navigation Bar */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-1">
            {/* Navigation Links */}
            <div className="flex items-center justify-around">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 min-w-0 flex-1 ${
                      pathname === item.href
                        ? "bg-amber-700/20 text-amber-700 border border-amber-700/30"
                        : "hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <Icon className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium truncate">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Top Logo Bar */}
        <div className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg sticky top-0 z-40">
          <div className="px-4">
            <div className="flex justify-center items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={logo_image || "/placeholder.svg"}
                  alt="logo image"
                  width={32}
                  height={32}
                  className="object-contain rounded-full"
                  priority
                />
                <span className="text-lg font-bold">MH Furniture</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

