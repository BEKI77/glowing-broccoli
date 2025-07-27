"use client"

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Play } from "lucide-react";
import { Home_page, image_links } from "@/constants/images-links";
import { testimonials } from "@/constants/testimonials";
import { motion, useInView } from "framer-motion";
import { GalleryPreview } from "@/components/gallary-preview";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-50">

      {/* Hero Gallery Section */}

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <Image
                src={Home_page["image1"]}
                alt="Gallery interior"
                fill
                priority
                className="object-cover opacity-10 dark:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
            </div>
          </div>
        
        {/* Floating 3D Gallery Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-gallery-card" style={{ top: "78%", left: "5%" , opacity:"0.8" }}>
            <Image
              src={Home_page["image1"]}
              alt="Handcrafted chair"
              width={300}
              height={200}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="floating-gallery-card" style={{ top: "40%", right: "10%" }}>
            <Image
              src={Home_page["image2"]}
              alt="Designer table"
              width={300}
              height={200}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="floating-gallery-card z-40" style={{ top: "70%", left: "70%" }}>
            <Image
              src={Home_page["image3"]}
              alt="Custom bookshelf"
              width={300}
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
                    Handcrafted Excellence Since 1998
                  </Badge>
                </motion.span>
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mx-auto max-w-2xl text-5xl lg:text-7xl font-bold leading-tight"
                  >
                    Beautiful Furniture, <span className="text-amber-400 font-serif italic">Crafted by Hand</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mx-auto max-w-2xl text-sm md:text-xl"
                  >
                  
                    Discover unique, handcrafted furniture pieces that bring warmth and character to your home. Each
                    piece is carefully crafted with premium materials and traditional techniques.
                  
                  </motion.p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gallery-btn-primary">
                    <Link href="/products">
                      Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gallery-btn-secondary bg-transparent">
                    <Link href="/gallery">
                      <Play className="mr-2 h-4 w-4" />
                      Virtual Tour
                    </Link>
                  </Button>
                </div>
              </div>

              {/* 3D Showcase Card */}
              <div className="relative">
                <div className="showcase-3d-card">
                  <Image
                    src={image_links["image7"]}
                    alt="Featured furniture piece"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="showcase-overlay">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Featured Piece</h3>
                      <p className="text-lg opacity-90">Handcrafted Oak Dining Table</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products Gallery */}
      <section className="py-24">
        <div className="px-5 md:px-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery Preview</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mx-auto max-w-[800px] text-md md:text-lg text-muted-foreground"
              >
                Explore a selection of our diverse collection, featuring works that challenge and inspire.
              </motion.p>
            </div>
            <GalleryPreview />
            <div className="flex justify-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

  
      {/* Testimonials Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl">Real stories from real customers who love our furniture</p>
          </div>

        
          <div className="testimonials-gallery">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={container}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
              
                >
                  <Card key={index} className="testimonial-card bg-background" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div>
                          <h4 className="font-semibold ">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="italic text-lg">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
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
        <motion.div 
           animate={{ opacity: 1 }}
           initial = {{opacity: 0.2}}
           whileInView={{ scale: 1, opacity:1 }}
         >
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl  mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us for a consultation or visit our showroom to see our
            craftsmanship up close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gallery-btn-primary">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gallery-btn-secondary bg-transparent">
              <Link href="/gallery">Visit Showroom</Link>
            </Button>
          </div>
        </div>
      </motion.div>
      </section>
    </div>
  )
}
