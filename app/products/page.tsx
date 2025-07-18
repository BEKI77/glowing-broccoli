import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

const categories = [
  { name: "All Products", count: 48 },
  { name: "Sofas", count: 12 },
  { name: "Chairs", count: 15 },
  { name: "Tables", count: 8 },
  { name: "Beds", count: 6 },
  { name: "Storage", count: 7 },
]

const products = [
  {
    id: 1,
    name: "Rustic Oak Dining Table",
    price: "$1,299",
    originalPrice: "$1,499",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tables",
    description: "Handcrafted from solid oak with traditional joinery techniques.",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Handcrafted Leather Sofa",
    price: "$2,499",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sofas",
    description: "Premium leather upholstery with solid hardwood frame.",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Vintage Wooden Bookshelf",
    price: "$899",
    image: "/placeholder.svg?height=300&width=400",
    category: "Storage",
    description: "Five-shelf bookcase with adjustable shelving.",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Mahogany Executive Desk",
    price: "$1,899",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tables",
    description: "Elegant executive desk with built-in drawers and cable management.",
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "Upholstered Accent Chair",
    price: "$649",
    originalPrice: "$799",
    image: "/placeholder.svg?height=300&width=400",
    category: "Chairs",
    description: "Comfortable accent chair with custom fabric options.",
    inStock: false,
    featured: false,
  },
  {
    id: 6,
    name: "Platform Bed Frame",
    price: "$1,199",
    image: "/placeholder.svg?height=300&width=400",
    category: "Beds",
    description: "Modern platform bed with built-in nightstands.",
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "Farmhouse Coffee Table",
    price: "$799",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tables",
    description: "Rustic farmhouse style with distressed finish.",
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    name: "Windsor Dining Chairs (Set of 4)",
    price: "$1,299",
    image: "/placeholder.svg?height=300&width=400",
    category: "Chairs",
    description: "Traditional Windsor chairs with spindle backs.",
    inStock: true,
    featured: false,
  },
  {
    id: 9,
    name: "Cedar Hope Chest",
    price: "$549",
    image: "/placeholder.svg?height=300&width=400",
    category: "Storage",
    description: "Aromatic cedar chest perfect for blanket storage.",
    inStock: true,
    featured: false,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of handcrafted furniture, each piece made with care and built to last.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Search Products</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search furniture..." className="pl-10" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500">$0 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                  <SelectItem value="2000+">$2,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Availability */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Availability</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                  <span className="text-gray-700">In Stock</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Made to Order</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters Bar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Showing {products.length} products</span>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-amber-700 text-white">{product.category}</Badge>
                      {product.featured && <Badge className="bg-green-600 text-white">Featured</Badge>}
                      {!product.inStock && <Badge variant="destructive">Out of Stock</Badge>}
                    </div>
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-red-600 text-white">Sale</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-amber-700">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-amber-700 hover:bg-amber-800" disabled={!product.inStock}>
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                      <Button variant="outline" size="icon">
                        ♡
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
