"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Search, Grid, List } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Custom Oak Kitchen Island",
    category: "Kitchen",
    image: "/placeholder.svg?height=400&width=600",
    description: "A beautiful custom kitchen island with built-in storage and seating for four.",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "Mahogany Executive Office Suite",
    category: "Office",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete office suite including desk, bookshelf, and filing cabinets.",
    date: "2024-01-10",
    featured: false,
  },
  {
    id: 3,
    title: "Rustic Farmhouse Dining Set",
    category: "Dining Room",
    image: "/placeholder.svg?height=400&width=600",
    description: "Eight-person dining table with matching bench and chairs.",
    date: "2024-01-05",
    featured: true,
  },
  {
    id: 4,
    title: "Custom Built-in Entertainment Center",
    category: "Living Room",
    image: "/placeholder.svg?height=400&width=600",
    description: "Wall-to-wall entertainment center with hidden cable management.",
    date: "2023-12-28",
    featured: false,
  },
  {
    id: 5,
    title: "Handcrafted Bedroom Set",
    category: "Bedroom",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete bedroom set with platform bed, nightstands, and dresser.",
    date: "2023-12-20",
    featured: false,
  },
  {
    id: 6,
    title: "Artisan Coffee Table Collection",
    category: "Living Room",
    image: "/placeholder.svg?height=400&width=600",
    description: "Unique live-edge coffee tables showcasing natural wood beauty.",
    date: "2023-12-15",
    featured: true,
  },
  {
    id: 7,
    title: "Custom Library Shelving",
    category: "Office",
    image: "/placeholder.svg?height=400&width=600",
    description: "Floor-to-ceiling library shelving with rolling ladder.",
    date: "2023-12-10",
    featured: false,
  },
  {
    id: 8,
    title: "Outdoor Patio Furniture Set",
    category: "Outdoor",
    image: "/placeholder.svg?height=400&width=600",
    description: "Weather-resistant teak patio set with cushioned seating.",
    date: "2023-12-05",
    featured: false,
  },
  {
    id: 9,
    title: "Vintage-Style Bar Cabinet",
    category: "Living Room",
    image: "/placeholder.svg?height=400&width=600",
    description: "Elegant bar cabinet with wine storage and glass display.",
    date: "2023-11-30",
    featured: false,
  },
]

const categories = ["All", "Kitchen", "Office", "Dining Room", "Living Room", "Bedroom", "Outdoor"]

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest creations and custom furniture projects. Each piece tells a unique story of craftsmanship
            and design.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters and Controls */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search gallery..."
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
              </span>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-amber-700 text-white">{item.category}</Badge>
                        {item.featured && <Badge className="bg-green-600 text-white">Featured</Badge>}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">{item.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-amber-700 text-white">{item.category}</Badge>
                        {item.featured && <Badge className="bg-green-600 text-white">Featured</Badge>}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-sm text-gray-500">
                        Completed:{" "}
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <div className="pt-4">
                        <Button className="bg-amber-700 hover:bg-amber-800">Request Similar Piece</Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-amber-700 text-white">{item.category}</Badge>
                      {item.featured && <Badge className="bg-green-600 text-white">Featured</Badge>}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <Button
                        variant="outline"
                        className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSelectedCategory("All")
                setSearchTerm("")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
