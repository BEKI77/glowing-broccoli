"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { featuredProducts, gallary_products } from "@/constants/products"


export function ArtworkGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {gallary_products.map((artwork) => (
        <motion.div key={artwork.id} variants={item}>
    
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted hover:">
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.name}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{artwork.name}</h3>
              <p className="text-sm text-muted-foreground">{artwork.description}</p>
              <p className="mt-2 text-sm font-medium">{artwork.category}</p>
            </div>
          
        </motion.div>
      ))}
    </motion.div>
  )
}
