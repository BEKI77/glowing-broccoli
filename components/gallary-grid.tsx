"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { WARDROBE, BEDS, SOFA, TV_STAND, DOORS, DINNING_TABLE, CABINETS } from "@/constants/images-links"

const categoryIcons = {
  Wardrobe: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
  Beds: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h18M3 14h18m-9-4v8m-7 0V8a2 2 0 012-2h14a2 2 0 012 2v10"
      />
    </svg>
  ),
  Sofa: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
    </svg>
  ),
  "TV Stand": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Doors: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      />
    </svg>
  ),
  "Dinning Table": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18v18H3V3zm0 6h18M9 3v18" />
    </svg>
  ),
  Cabinets: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
}

// Category component to fix hook usage
function CategorySection({
  category,
  categoryIndex,
  totalCategories,
}: {
  category: { name: string; images: Record<string, string>; color: string }
  categoryIndex: number
  totalCategories: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6},
    },
  }

  return (
    <motion.section ref={ref} initial="hidden" animate={isInView ? "show" : "hidden"} className="mb-24 last:mb-0">
      <motion.div variants={categoryVariants} className="my-5">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="flex items-center gap-4 px-6 py-3 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="text-slate-600 dark:text-slate-300">
              {categoryIcons[category.name as keyof typeof categoryIcons]}
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
              {category.name}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent dark:from-slate-600 dark:via-slate-700"></div>
        </div>
      </motion.div>

      {/* Images Grid */}
      <motion.div variants={container} className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(category.images).map(([key, url]) => (
          <motion.div key={key} variants={item} className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-400 border border-slate-200 dark:border-slate-700">
              <Image
                src={url || "/placeholder.svg?height=400&width=400&query=modern+furniture"}
                alt={`${category.name} ${key}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                <div className="text-white">
                  <h3 className="text-base font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-200 capitalize font-light">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                </div>
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-sm">
                <svg
                  className="w-3.5 h-3.5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </motion.section>
  )
}

export function ArtworkGrid() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    { name: "Wardrobe", images: WARDROBE, color: "from-slate-50 to-slate-100" },
    { name: "Beds", images: BEDS, color: "from-slate-50 to-slate-100" },
    { name: "Sofa", images: SOFA, color: "from-slate-50 to-slate-100" },
    { name: "TV Stand", images: TV_STAND, color: "from-slate-50 to-slate-100" },
    { name: "Doors", images: DOORS, color: "from-slate-50 to-slate-100" },
    { name: "Dinning Table", images: DINNING_TABLE, color: "from-slate-50 to-slate-100" },
    { name: "Cabinets", images: CABINETS, color: "from-slate-50 to-slate-100" },
  ]

  const filteredCategories =
    selectedCategories.length === 0
      ? categories
      : categories.filter((category) => selectedCategories.includes(category.name))

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 opacity-5`}></div>
        <div className="relative px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">Premium Furniture</h1>
            <div className="w-16 h-px dark:bg-white bg-black mx-auto"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            Explore our carefully curated collection of contemporary furniture designed for sophisticated living spaces
          </motion.p>
        </div>
      </div>


      <div className="flex flex-col">
        <div className="mx-auto py-2">
        <div className="rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-4 w-[80%] mx-auto">
          <div className="flex items-center gap-2 mb-3 ">
            <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <h3 className="text-sm font-medium ">Filter</h3>
            {selectedCategories.length > 0 && (
              <button
                onClick={clearFilters}
                className="ml-auto text-xs  transition-colors"
              >
                Clear ({selectedCategories.length})
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 min-w-[90%] justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => toggleCategory(category.name)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedCategories.includes(category.name)
                    ? " bg-gray-300 dark:bg-slate-900 shadow-sm"
                    : " hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <div
                  className={`transition-colors`}
                >
                  {categoryIcons[category.name as keyof typeof categoryIcons]}
                </div>
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs">
              {filteredCategories.length} of {categories.length} categories
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="px-2 py-2 w-[100%] mx-auto">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-slate-400 dark:text-slate-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.306"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-2">No categories selected</h3>
            <p className="text-slate-500 dark:text-slate-500">
              Choose categories from the filter panel to view furniture
            </p>
          </div>
        ) : (
          filteredCategories.map((category, categoryIndex) => (
            <CategorySection
              key={category.name}
              category={category}
              categoryIndex={categoryIndex}
              totalCategories={filteredCategories.length}
            />
          ))
        )}
      </div>

      </div>

    </div>
  )
}
