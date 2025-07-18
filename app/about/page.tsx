import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hammer, Heart, Leaf, Award, Users, Clock } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description: "Every piece is created with love and dedication to the art of woodworking.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "We source only the finest, sustainably harvested wood for our furniture.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Each piece comes with our lifetime craftsmanship guarantee.",
  },
  {
    icon: Users,
    title: "Family Tradition",
    description: "Three generations of furniture makers bringing you timeless designs.",
  },
]

const timeline = [
  {
    year: "1998",
    title: "The Beginning",
    description: "Michael Harrison started MH Furniture Shop in his garage with just basic tools and a dream.",
  },
  {
    year: "2005",
    title: "First Workshop",
    description: "Moved to our first dedicated workshop space and hired our first apprentice.",
  },
  {
    year: "2012",
    title: "Recognition",
    description: "Won the Regional Craftsmanship Award for our innovative joinery techniques.",
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Opened our current 5,000 sq ft workshop and showroom.",
  },
  {
    year: "2023",
    title: "Digital Presence",
    description: "Launched our online gallery and expanded to serve customers nationwide.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-200 text-amber-800 hover:bg-amber-300">Our Story</Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Crafting Dreams Into <span className="text-amber-700">Reality</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 25 years, MH Furniture Shop has been creating beautiful, handcrafted furniture that tells a
                story. Every piece we create is a testament to our commitment to quality, sustainability, and timeless
                design.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/photo_1.jpg"
                alt="Michael Harrison in his workshop"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To create exceptional, handcrafted furniture that brings warmth, beauty, and functionality to homes while
              preserving traditional woodworking techniques and supporting sustainable practices. We believe that
              furniture should be more than functional—it should be a work of art that lasts for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Meet Michael Harrison</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Michael Harrison, the founder and master craftsman behind MH Furniture Shop, discovered his passion for
                woodworking at the age of 16 when he built his first piece—a simple oak stool for his grandmother.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                After studying traditional joinery techniques in Europe and working alongside master craftsmen for over
                a decade, Michael returned home with a vision: to create furniture that combines old-world craftsmanship
                with modern design sensibilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Michael leads a team of skilled artisans who share his commitment to excellence. Each piece that
                leaves our workshop carries his personal seal of approval and our lifetime craftsmanship guarantee.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Hammer className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Master Craftsman</p>
                  <p className="text-gray-600">Certified Traditional Joinery</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Michael Harrison working on a piece"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Est. 1998</p>
                    <p className="text-sm text-gray-600">25+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped MH Furniture Shop</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Craftsmanship</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece we create goes through a meticulous process that combines traditional techniques with modern
              precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Wood selection process"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Selection</h3>
              <p className="text-gray-600">
                We carefully select each piece of wood, ensuring the grain, color, and quality meet our exacting
                standards.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Handcrafting process"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hand Crafting</h3>
              <p className="text-gray-600">
                Using time-honored techniques and precision tools, our artisans shape each piece with care and attention
                to detail.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Finishing process"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Finish</h3>
              <p className="text-gray-600">
                Multiple coats of premium finish protect the wood while enhancing its natural beauty and character.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
