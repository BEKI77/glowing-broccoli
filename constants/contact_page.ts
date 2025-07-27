import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    details: ["Main: (555) 123-4567", "Mobile: (555) 987-6543"],
    image: "/placeholder.svg?height=300&width=400&text=Phone+Consultation+Call",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your project details",
    details: ["info@mhfurniture.com", "orders@mhfurniture.com"],
    image: "/placeholder.svg?height=300&width=400&text=Email+Communication",
    color: "bg-green-500",
  },
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    description: "See our craftsmanship in person",
    details: ["1234 Craftsman Lane", "Woodville, TX 75990"],
    image: "/placeholder.svg?height=300&width=400&text=Beautiful+Furniture+Showroom+Interior",
    color: "bg-amber-500",
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a personalized meeting",
    details: ["Free consultation", "Custom design session"],
    image: "/placeholder.svg?height=300&width=400&text=Design+Consultation+Meeting",
    color: "bg-purple-500",
  },
]

export const faqItems = [
  {
    question: "How long does a custom piece take?",
    answer:
      "Most custom pieces take 4-8 weeks depending on complexity and our current workload. We'll provide a detailed timeline during consultation.",
    image: "/placeholder.svg?height=200&width=300&text=Custom+Furniture+Timeline",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes! We offer local delivery within 50 miles and can arrange shipping nationwide for larger orders.",
    image: "/placeholder.svg?height=200&width=300&text=Furniture+Delivery+Service",
  },
  {
    question: "What wood types do you work with?",
    answer:
      "We work with oak, maple, cherry, walnut, mahogany, and many other hardwoods. We can source specific woods upon request.",
    image: "/placeholder.svg?height=200&width=300&text=Premium+Wood+Selection",
  },
  {
    question: "Do you provide warranties?",
    answer:
      "All our pieces come with a lifetime craftsmanship warranty. We stand behind our work and will repair any defects in materials or workmanship.",
    image: "/placeholder.svg?height=200&width=300&text=Quality+Warranty+Certificate",
  },
]