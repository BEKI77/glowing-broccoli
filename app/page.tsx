import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Play } from "lucide-react"
import { Home_page, image_links } from "@/constants/images-links"
import { featuredProducts } from "@/constants/products"
import { testimonials } from "@/constants/testimonials"
import * as motion from "motion/react-client"

const galleryImages = [
  "/placeholder.svg?height=600&width=800&text=Luxury+Living+Room+Showcase",
  "/placeholder.svg?height=600&width=800&text=Modern+Dining+Room+Setup",
  "/placeholder.svg?height=600&width=800&text=Elegant+Bedroom+Collection",
  "/placeholder.svg?height=600&width=800&text=Contemporary+Office+Space",
  "/placeholder.svg?height=600&width=800&text=Cozy+Reading+Nook+Design",
]

const transition  = {
  duration: 1,
  delay: 0.8,
  ease: [0, 0.71, 0.2, 1.01] as [ number,  number, number, number],
}

export default function HomePage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-50">
    <motion.div 
      // animate={{ opacity: 1 }}
      initial = {{opacity: 0.4}}
      whileInView={{ opacity: 1 }}
      transition = {transition}
    >
      {/* Hero Gallery Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Main Hero Image */}
        <div className="absolute inset-0">
          <Image
            src={Home_page["image1"]} // Replace with your image path
            alt="Artistic 3D Art"
            fill
            className="object-cover opacity-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
        </div> 
        

        {/* Floating 3D Gallery Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-gallery-card" style={{ top: "20%", left: "10%" }}>
            <Image
              src={Home_page["image1"]}
              alt="Handcrafted chair"
              width={300}
              height={200}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="floating-gallery-card" style={{ top: "60%", right: "15%" }}>
            <Image
              src={Home_page["image2"]}
              alt="Designer table"
              width={300}
              height={200}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="floating-gallery-card" style={{ top: "40%", left: "70%" }}>
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
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">
                    Handcrafted Excellence Since 1998
                  </Badge>
                  <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Beautiful Furniture, <span className="text-amber-400 font-serif italic">Crafted by Hand</span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                    Discover unique, handcrafted furniture pieces that bring warmth and character to your home. Each
                    piece is carefully crafted with premium materials and traditional techniques.
                  </p>
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
                    src={image_links["image3"]}
                    alt="Featured furniture piece"
                    width={500}
                    height={600}
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
  </motion.div>

  <motion.div 
      animate={{ opacity: 1 }}
      initial = {{scale: 0.8}}
      whileInView={{ scale: 1 }}
      transition={transition}
    >
      {/* Gallery Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Showroom</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Step into our world of handcrafted furniture where every piece tells a story
            </p>
          </div>

          {/* 3D Gallery Grid */}
          <div className="gallery-3d-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-3d-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="gallery-3d-overlay">
                  <Button variant="outline" className="gallery-overlay-btn bg-transparent">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  </motion.div>

   <motion.div 
      animate={{ opacity: 1 }}
      initial = {{scale: 0.8}}
      whileInView={{ scale: 1 }}
      transition={transition}
    >

      {/* Featured Products Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular handcrafted pieces, each one unique and built to last generations
            </p>
          </div>

          <div className="products-gallery-grid">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="product-gallery-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image-container">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="product-category-badge">{product.category}</Badge>
                  <div className="product-overlay">
                    <Button className="product-overlay-btn">Quick View</Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  </motion.div>

  <motion.div 
      animate={{ opacity: 1 }}
      initial = {{scale: 0.8}}
      whileInView={{ scale: 1 }}
      transition={transition}
    >

    
      {/* Testimonials Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real stories from real customers who love our furniture</p>
          </div>

          <div className="testimonials-gallery">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  </motion.div>

   <motion.div 
      animate={{ opacity: 1 }}
      initial = {{opacity: 0.2}}
      whileInView={{ scale: 1, opacity:1 }}
    >

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Home_page["image6"]}
            alt="Workshop interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
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
      </section>
  </motion.div>
    </div>
  )
}
