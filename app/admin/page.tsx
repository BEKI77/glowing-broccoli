"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Plus, Edit, Trash2, Eye, Save } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  date: string
  featured: boolean
}

const initialGalleryItems: GalleryItem[] = [
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
]

const categories = ["Kitchen", "Office", "Dining Room", "Living Room", "Bedroom", "Outdoor"]

export default function AdminPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [newItem, setNewItem] = useState<Partial<GalleryItem>>({
    title: "",
    category: "",
    description: "",
    image: "",
    featured: false,
  })

  const handleAddItem = () => {
    if (newItem.title && newItem.category && newItem.description) {
      const item: GalleryItem = {
        id: Date.now(),
        title: newItem.title,
        category: newItem.category,
        description: newItem.description,
        image: newItem.image || "/placeholder.svg?height=400&width=600",
        date: new Date().toISOString().split("T")[0],
        featured: newItem.featured || false,
      }
      setGalleryItems([item, ...galleryItems])
      setNewItem({
        title: "",
        category: "",
        description: "",
        image: "",
        featured: false,
      })
      setIsAddDialogOpen(false)
    }
  }

  const handleEditItem = (item: GalleryItem) => {
    setEditingItem(item)
  }

  const handleSaveEdit = () => {
    if (editingItem) {
      setGalleryItems(galleryItems.map((item) => (item.id === editingItem.id ? editingItem : item)))
      setEditingItem(null)
    }
  }

  const handleDeleteItem = (id: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setGalleryItems(galleryItems.filter((item) => item.id !== id))
    }
  }

  const handleToggleFeatured = (id: number) => {
    setGalleryItems(galleryItems.map((item) => (item.id === id ? { ...item, featured: !item.featured } : item)))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isEditing = false) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real application, you would upload to a service like Vercel Blob
      const imageUrl = URL.createObjectURL(file)
      if (isEditing && editingItem) {
        setEditingItem({ ...editingItem, image: imageUrl })
      } else {
        setNewItem({ ...newItem, image: imageUrl })
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Gallery Admin</h1>
              <p className="text-xl text-gray-600">
                Manage your furniture gallery - add, edit, and organize your work.
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-amber-700 hover:bg-amber-800" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Gallery Item</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newItem.title || ""}
                      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                      placeholder="Enter item title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newItem.category || ""}
                      onValueChange={(value) => setNewItem({ ...newItem, category: value })}
                    >
                      <SelectTrigger>
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

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newItem.description || ""}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      placeholder="Enter item description"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image</Label>
                    <div className="flex items-center space-x-4">
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e)}
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    {newItem.image && (
                      <div className="mt-2">
                        <Image
                          src={newItem.image || "/placeholder.svg"}
                          alt="Preview"
                          width={200}
                          height={150}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={newItem.featured || false}
                      onChange={(e) => setNewItem({ ...newItem, featured: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="featured">Featured Item</Label>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddItem} className="bg-amber-700 hover:bg-amber-800">
                      Add Item
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900">{galleryItems.length}</div>
              <p className="text-gray-600">Total Items</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">
                {galleryItems.filter((item) => item.featured).length}
              </div>
              <p className="text-gray-600">Featured Items</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">
                {new Set(galleryItems.map((item) => item.category)).size}
              </div>
              <p className="text-gray-600">Categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-amber-600">
                {
                  galleryItems.filter((item) => new Date(item.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
                    .length
                }
              </div>
              <p className="text-gray-600">Added This Month</p>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Items Table */}
        <Card>
          <CardHeader>
            <CardTitle>Gallery Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {galleryItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={60}
                        height={40}
                        className="rounded object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.category}</Badge>
                    </TableCell>
                    <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {item.featured && <Badge className="bg-green-600 text-white">Featured</Badge>}
                        <Badge variant="outline">Published</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleToggleFeatured(item.id)}
                          title={item.featured ? "Remove from featured" : "Add to featured"}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleEditItem(item)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDeleteItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        {editingItem && (
          <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Edit Gallery Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Title</Label>
                  <Input
                    id="edit-title"
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-category">Category</Label>
                  <Select
                    value={editingItem.category}
                    onValueChange={(value) => setEditingItem({ ...editingItem, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
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

                <div className="space-y-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-image">Image</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="edit-image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, true)}
                      className="flex-1"
                    />
                    <Button variant="outline" size="icon">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  {editingItem.image && (
                    <div className="mt-2">
                      <Image
                        src={editingItem.image || "/placeholder.svg"}
                        alt="Preview"
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="edit-featured"
                    checked={editingItem.featured}
                    onChange={(e) => setEditingItem({ ...editingItem, featured: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="edit-featured">Featured Item</Label>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setEditingItem(null)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveEdit} className="bg-amber-700 hover:bg-amber-800">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}
