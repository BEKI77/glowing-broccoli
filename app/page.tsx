import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Hammer } from "lucide-react"
import { image_links } from "@/constants/images-links"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const featuredProducts = [
  {
    id: 1,
    name: "Rustic Oak Dining Table",
    image: image_links["image3"],
    description: "A handcrafted oak dining table with a rustic finish, perfect for family gatherings and adding warmth to your dining space.",
    category: "Tables",
    featured: true,
  },
  {
    id: 2,
    name: "Kitchen Cabinet",
    image: image_links["image2"],
    description: "Spacious and elegant, this kitchen cabinet offers ample storage and a timeless design to organize your kitchen essentials.",
    category: "Kitchen",
    featured: true,
  },
  {
    id: 3,
    name: "Vintage Wooden Bed",
    image: image_links["image1"],
    description: "A vintage-inspired wooden bed frame, expertly crafted for comfort and style, bringing classic charm to any bedroom.",
    category: "Storage",
    featured: true,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely beautiful craftsmanship! Our dining table is the centerpiece of our home.",
    location: "Austin, TX",
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "The attention to detail is incredible. Worth every penny for such quality furniture.",
    location: "Denver, CO",
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    text: "Professional service and stunning results. Highly recommend MH Furniture Shop!",
    location: "Portland, OR",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-200 text-amber-800 hover:bg-amber-300">ቤተሰባዊነታችን መጀመርያ እንጂ መጨረሻ የለውም</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Beautiful Furniture, <span className="text-amber-700">Crafted by Hand</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover unique, handcrafted furniture pieces that bring warmth and character to your home. Each piece
                  is carefully crafted with premium materials and traditional techniques.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/products">
                    Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent"
                >
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/photo_2.jpg"
                alt="Handcrafted furniture showcase"
                fill
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Hammer className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">25+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular handcrafted pieces, each one unique and built to last generations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden w-full h-64 md:h-70">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      />
                    <Badge className="absolute top-4 left-4 bg-amber-700 text-white">{product.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <HoverCard>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <HoverCardTrigger asChild>
                        <Button className="w-full bg-amber-700 hover:bg-amber-800">View Details</Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                          <div className="space-y-1 p-3">
                            <p className="text-sm">{product.description}</p>
                          </div>
                      </HoverCardContent>
                    </HoverCard>
                  </CardContent>
                </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent"
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real customers who love our furniture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's create something beautiful together. Contact us for a consultation or browse our collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-700 bg-transparent"
            >
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
