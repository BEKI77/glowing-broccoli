import { ArtworkGrid } from "@/components/gallary-grid"

export default function GalleryPage() {
  return (
    <div className="px-4 py-12 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-2 mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center">Gallery Collection</h1>
          <p className="text-xl text-muted-foreground text-center">Browse our complete collection of contemporary artwork</p>
        </div>
        <ArtworkGrid />
      </div>
    </div>
  )
}