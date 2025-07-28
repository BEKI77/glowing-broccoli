"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Award, Users, Play, ArrowRight } from "lucide-react";
import { About_page, Home_page, image_links } from "@/constants/images-links";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description: "Every piece is created with love and dedication to the art of woodworking.",
    image: image_links["image4"],
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "We source only the finest, sustainably harvested wood for our furniture.",
    image: image_links["image5"],
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Each piece comes with our lifetime craftsmanship guarantee.",
    image: image_links["image6"],
  },
  {
    icon: Users,
    title: "Family Tradition",
    description: "Three generations of furniture makers bringing you timeless designs.",
    image: image_links["image7"],
  },
]

const timeline = [
  {
    year: "1998",
    title: "The Beginning",
    description: "Mohammed Hayder started MH Furniture Shop in his garage with just basic tools and a dream.",
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

        <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <Image
                src={About_page["image4"]}
                alt="Gallery interior"
                fill
                priority
                className="object-cover opacity-10 dark:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
            </div>
          </div>
        
        {/* Floating 3D Gallery Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-gallery-card" style={{ top: "55%", right: "13%" }}>
            <Image
              src={About_page["image2"]}
              alt="Designer table"
              width={200}
              height={200}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
         
        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center pt-10  md:pt-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-2 py-1">
                    Crafting heritage furniture for over 25 years.
                  </Badge>
                </motion.span>
                <div className="space-y-6 mt-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mx-auto max-w-2xl text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    Where Timeless Design Meets <span className="text-amber-400 font-serif italic">Your Story</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mx-auto max-w-2xl text-sm md:text-md"
                  >      
                    For over 25 years, MH Furniture Shop has been creating beautiful, 
                    handcrafted furniture that tells a story.Every piece we create is 
                    a testament to our commitment to quality, sustainability, and timeless design.
                  </motion.p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gallery-btn-primary">
                    <Link href="/products">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Our Story 
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gallery-btn-secondary bg-transparent">
                    <Link href="#Team">
                      Meet the Team
                    </Link>
                  </Button>
                </div>
              </div>

              {/* 3D Showcase Card */}
              <div className="relative">
                <div className="showcase-3d-card">
                  <Image
                    src={About_page["image4"]}
                    alt="Featured furniture piece"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="showcase-overlay">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Featured Piece</h3>
                      <p className="text-lg opacity-90">Handcrafted Oak Bed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section with Image Gallery */}
      <section className="py-20 relative min-h-screen overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-15 dark:opacity-5">
          <Image
            src={image_links["image8"]}
            alt="Workshop background"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto px-4 z-10 absolute h-full w-full">
          <div className="flex flex-col gap-10 h-full justify-center ">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mx-auto max-w-2xl text-5xl lg:text-7xl text-center font-bold leading-tight"
              >
                Our <span className="text-amber-600 font-serif italic">Mission</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mx-auto max-w-7xl text-md md:text-xl text-center leading-relaxed"
              >
                Our mission is to design, manufacture, and trade exceptional furniture that combines timeless 
                craftsmanship with contemporary aesthetics, ensuring lasting value and customer satisfaction.
                We believe that furniture should be more than functional—it should be a work of art that lasts for
                generations, telling the story of the hands that crafted it and the home that embraces it.
              </motion.p>    
              
              <Link href="#process" className="mx-auto">
                <Button className="gallery-btn-primary " size="lg">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Explore Our Process
                </Button>
              </Link>
            
          </div>
        </div>
      </section>

      {/* Values Section with 3D Cards */}
      <section className="py-20 h">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold  mb-6">Our Values</h2>
            <p className="text-xl max-w-2xl mx-auto">
              The principles that guide everything we do, from selecting materials to delivering your finished piece
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} style={{ animationDelay: `${index * 0.2}s` }}>
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
                  <h3 className="text-xl font-semibold  mb-3">{value.title}</h3>
                  <p className="leading-relaxed">{value.description}</p>
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
      <section className="py-20" id="process">
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
