import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Leaf, Award, Users, Play, ArrowRight } from "lucide-react"
import { About_page, Home_page, image_links } from "@/constants/images-links"

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description: "Every piece is created with love and dedication to the art of woodworking.",
    image: "/placeholder.svg?height=300&width=400&text=Passionate+Craftsman+at+Work",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "We source only the finest, sustainably harvested wood for our furniture.",
    image: "/placeholder.svg?height=300&width=400&text=Sustainable+Wood+Selection",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Each piece comes with our lifetime craftsmanship guarantee.",
    image: "/placeholder.svg?height=300&width=400&text=Quality+Furniture+Inspection",
  },
  {
    icon: Users,
    title: "Family Tradition",
    description: "Three generations of furniture makers bringing you timeless designs.",
    image: "/placeholder.svg?height=300&width=400&text=Family+Furniture+Workshop",
  },
]

const timeline = [
  {
    year: "1998",
    title: "The Beginning",
    description: "Michael Harrison started MH Furniture Shop in his garage with just basic tools and a dream.",
    image: "/placeholder.svg?height=300&width=400&text=1998+Garage+Workshop+Beginning",
  },
  {
    year: "2005",
    title: "First Workshop",
    description: "Moved to our first dedicated workshop space and hired our first apprentice.",
    image: "/placeholder.svg?height=300&width=400&text=2005+First+Professional+Workshop",
  },
  {
    year: "2012",
    title: "Recognition",
    description: "Won the Regional Craftsmanship Award for our innovative joinery techniques.",
    image: "/placeholder.svg?height=300&width=400&text=2012+Award+Ceremony+Recognition",
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Opened our current 5,000 sq ft workshop and showroom.",
    image: "/placeholder.svg?height=300&width=400&text=2018+Modern+Workshop+Expansion",
  },
  {
    year: "2023",
    title: "Digital Presence",
    description: "Launched our online gallery and expanded to serve customers nationwide.",
    image: "/placeholder.svg?height=300&width=400&text=2023+Digital+Showroom+Launch",
  },
]

const craftProcess = [
  {
    step: "01",
    title: "Material Selection",
    description:
      "We carefully select each piece of wood, ensuring the grain, color, and quality meet our exacting standards.",
    image: "/placeholder.svg?height=400&width=600&text=Wood+Selection+Process+Premium+Materials",
  },
  {
    step: "02",
    title: "Hand Crafting",
    description:
      "Using time-honored techniques and precision tools, our artisans shape each piece with care and attention to detail.",
    image: "/placeholder.svg?height=400&width=600&text=Master+Craftsman+Hand+Shaping+Wood",
  },
  {
    step: "03",
    title: "Perfect Finish",
    description: "Multiple coats of premium finish protect the wood while enhancing its natural beauty and character.",
    image: "/placeholder.svg?height=400&width=600&text=Furniture+Finishing+Process+Premium+Quality",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-50">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="parallax-container">
            <Image
              src={About_page["image4"]}
              alt="Master craftsman in workshop"
              fill
              className="object-cover parallax-bg"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>

        {/* Floating Workshop Images */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-gallery-card" style={{ top: "15%", right: "10%" }}>
            <Image
              src={About_page["image1"]}
              alt="Traditional tools"
              width={250}
              height={200}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="floating-gallery-card" style={{ bottom: "20%", left: "2%" }}>
            <Image
              src={About_page["image2"]}
              alt="Furniture detail"
              width={200}
              height={200}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">Our Story Since 1998</Badge>
                <h1 className="text-6xl lg:text-7xl font-bold  leading-tight">
                  Crafting Dreams Into <span className="text-amber-400 font-serif italic">Reality</span>
                </h1>
                <p className="text-xl  leading-relaxed max-w-lg">
                  For over 25 years, MH Furniture Shop has been creating beautiful, handcrafted furniture that tells a
                  story. Every piece we create is a testament to our commitment to quality, sustainability, and timeless
                  design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gallery-btn-primary" size="lg">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Our Story
                  </Button>
                  <Button variant="outline" className="gallery-btn-secondary bg-transparent" size="lg">
                    Meet the Team
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="about-hero-card">
                  <Image
                    src={About_page["image5"]}
                    alt="Michael Harrison portrait"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="about-hero-overlay">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Michael Harrison</h3>
                      <p className="text-lg opacity-90">Master Craftsman & Founder</p>
                      <p className="text-sm mt-2 opacity-80">25+ Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Image Gallery */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image
            src="/placeholder.svg?height=800&width=600&text=Workshop+Tools+Background"
            alt="Workshop background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-bold leading-tight">
                Our <span className="text-amber-600 font-serif italic">Mission</span>
              </h2>
              <p className="text-xl leading-relaxed">
                To create exceptional, handcrafted furniture that brings warmth, beauty, and functionality to homes
                while preserving traditional woodworking techniques and supporting sustainable practices.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that furniture should be more than functional—it should be a work of art that lasts for
                generations, telling the story of the hands that crafted it and the home that embraces it.
              </p>
              <Button className="gallery-btn-primary" size="lg">
                <ArrowRight className="mr-2 h-4 w-4" />
                Explore Our Process
              </Button>
            </div>
            <div className="relative">
              <div className="mission-image-gallery">
                <div className="mission-main-image">
                  <Image
                    src="/placeholder.svg?height=500&width=600&text=Beautiful+Handcrafted+Furniture+Collection"
                    alt="Furniture collection"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="mission-floating-image mission-float-1">
                  <Image
                    src="/placeholder.svg?height=200&width=250&text=Craftsman+Hands+Working"
                    alt="Craftsman hands"
                    width={250}
                    height={200}
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div className="mission-floating-image mission-float-2">
                  <Image
                    src="/placeholder.svg?height=180&width=220&text=Wood+Grain+Detail"
                    alt="Wood grain detail"
                    width={220}
                    height={180}
                    className="rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with 3D Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold  mb-6">Our Values</h2>
            <p className="text-xl max-w-2xl mx-auto">
              The principles that guide everything we do, from selecting materials to delivering your finished piece
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} className="value-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="value-image-container">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="value-icon-overlay">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold  mb-6">Our Journey</h2>
            <p className="text-xl ">Milestones that shaped MH Furniture Shop</p>
          </div>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-image">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">Our Craftsmanship</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Every piece goes through a meticulous process that combines traditional techniques with modern precision
            </p>
          </div>
          <div className="craft-process-grid">
            {craftProcess.map((process, index) => (
              <div key={index} className="craft-process-card" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="craft-image-container">
                  <Image
                    src={process.image || "/placeholder.svg"}
                    alt={process.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="craft-step-number">{process.step}</div>
                </div>
                <div className="craft-content">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image  
            src={Home_page["image6"]}
            alt="Workshop interior"
            fill
            className="object-cover opacity-40 dark:opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something beautiful together. Every great piece starts with a
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gallery-btn-primary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="gallery-btn-secondary bg-transparent" size="lg">
              Visit Our Workshop
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
