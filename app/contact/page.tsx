"use client"

import type React from "react"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "../hooks/use-toast";
import { z } from "zod"
import { contactMethods, faqItems } from "@/constants/contact_page"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\\$]/g, "")),
      {
        message: "Please enter a valid phone number",
      },
    ),
  projectType: z.string().min(1, "Please select a project type"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  newsletter: z.boolean(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      subject: "",
      message: "",
      budget: "",
      timeline: "",
      newsletter:false,
      terms: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", data)

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      })

      setSubmitSuccess(true)
      form.reset()

      // Reset success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Floating Contact Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-contact-card" style={{ top: "20%", right: "10%" }}>
            <div className="contact-info-bubble">
              <Phone className="h-6 w-6 text-amber-600 mb-2" />
              <p className="text-sm font-semibold">(555) 123-4567</p>
            </div>
          </div>
          <div className="floating-contact-card" style={{ bottom: "25%", left: "8%" }}>
            <div className="contact-info-bubble">
              <MapPin className="h-6 w-6 text-amber-600 mb-2" />
              <p className="text-sm font-semibold">Visit Showroom</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">Let's Create Together</Badge>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Get In <span className="text-amber-400 font-serif italic">Touch</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Ready to create something beautiful? We'd love to hear about your project and discuss how we can bring
                  your vision to life with our handcrafted furniture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gallery-btn-primary" size="lg">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Conversation
                  </Button>
                  <Button variant="outline" className="gallery-btn-secondary bg-transparent" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="contact-hero-card">
                  <Image
                    src="/placeholder.svg?height=600&width=500&text=Friendly+Team+Ready+to+Help"
                    alt="Friendly team"
                    width={500}
                    height={600}
                    className="rounded-2xl"
                  />
                  <div className="contact-hero-overlay">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">We're Here to Help</h3>
                      <p className="text-lg opacity-90">Expert consultation & design</p>
                      <p className="text-sm mt-2 opacity-80">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold  mb-6">How Can We Help?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Choose the best way to reach us. We're here to answer your questions and discuss your project.
            </p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <Card key={index}  style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="contact-method-image">
                  {/* <Image
                    src={method.image || "/placeholder.svg"}
                    alt={method.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  /> */}
                  <div className={`contact-method-icon ${method.color}`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold  mb-2">{method.title}</h3>
                  <p className="mb-4">{method.description}</p>
                  <div className="space-y-1">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {method.href ? (
                    <a href={method.href} className="w-full mt-4 block">
                      <Button className="w-full gallery-btn-primary">{method.title.split(" ")[0]} Now</Button>
                    </a>
                  ) : (
                    <Button className="w-full mt-4 gallery-btn-primary">{method.title.split(" ")[0]} Now</Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="animate-slide-in-left">
              <Card >
                <CardHeader>
                  <CardTitle className="text-3xl mb-2 flex items-center">
                    {submitSuccess ? (
                      <>
                        <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="h-8 w-8 text-amber-600 mr-3" />
                        Send us a Message
                      </>
                    )}
                  </CardTitle>
                  <p >
                    {submitSuccess
                      ? "Thank you for reaching out! We'll get back to you within 24 hours with a detailed response."
                      : "Fill out the form below and we'll get back to you within 24 hours with a detailed response."}
                  </p>
                </CardHeader>
                <CardContent>
                  {!submitSuccess ? (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className=""
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Phone and Project Type Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="(555) 123-4567" className="" {...field} />
                                </FormControl>
                                <FormDescription>Optional - for faster response</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="">
                                      <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="custom-furniture">Custom Furniture</SelectItem>
                                    <SelectItem value="furniture-repair">Furniture Repair</SelectItem>
                                    <SelectItem value="consultation">Design Consultation</SelectItem>
                                    <SelectItem value="restoration">Furniture Restoration</SelectItem>
                                    <SelectItem value="commercial">Commercial Project</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Budget and Timeline Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="">
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under-1000">Under $1,000</SelectItem>
                                    <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                                    <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                    <SelectItem value="over-10000">Over $10,000</SelectItem>
                                    <SelectItem value="discuss">Prefer to discuss</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>Optional - helps us provide better estimates</FormDescription>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Timeline</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="">
                                      <SelectValue placeholder="When do you need this?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="asap">As soon as possible</SelectItem>
                                    <SelectItem value="1-2-months">1-2 months</SelectItem>
                                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                                    <SelectItem value="6-12-months">6-12 months</SelectItem>
                                    <SelectItem value="flexible">Flexible</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>Optional - helps us schedule accordingly</FormDescription>
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Subject */}
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="What can we help you with?" className="" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Message */}
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project, timeline, budget, or any questions you have..."
                                  rows={6}
                                  className=" resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>{field.value?.length || 0}/1000 characters</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Checkboxes */}
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="newsletter"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    Subscribe to our newsletter for updates and furniture care tips
                                  </FormLabel>
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    I agree to the{" "}
                                    <a href="#" className="text-amber-600 hover:underline">
                                      terms and conditions
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-amber-600 hover:underline">
                                      privacy policy
                                    </a>
                                    *
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button type="submit" className="gallery-btn-primary w-full" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you for your message!</h3>
                      <p className="text-gray-600 mb-6">
                        We've received your inquiry and will respond within 24 hours. In the meantime, feel free to
                        explore our gallery or call us directly.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => setSubmitSuccess(false)}
                          variant="outline"
                          className="gallery-btn-secondary bg-transparent"
                        >
                          Send Another Message
                        </Button>
                        <Button className="gallery-btn-primary">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Us Now
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Business Hours & Location */}
              <Card className="">
                <div className="contact-info-image">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Beautiful+Showroom+Exterior+View"
                    alt="Showroom exterior"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Visit Our Showroom</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold ">Address</p>
                        <p >
                          1234 Craftsman Lane
                          <br />
                          Woodville, TX 75990
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <div className="space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 gallery-btn-primary">Get Directions</Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="">
                <div className="contact-info-image">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Social+Media+Behind+the+Scenes"
                    alt="Behind the scenes"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold  mb-4">Follow Our Journey</h3>
                  <p className="mb-6">
                    Stay updated with our latest projects and behind-the-scenes content
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="social-btn facebook-btn bg-transparent">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="social-btn instagram-btn bg-transparent">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="social-btn twitter-btn bg-transparent">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Find answers to common questions about our process, services, and craftsmanship
            </p>
          </div>

          <div className="faq-grid">
            {faqItems.map((faq, index) => (
              <Card key={index}  style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="faq-image">
                  <Image
                    src={faq.image || "/placeholder.svg"}
                    alt={faq.question}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold  mb-3">{faq.question}</h3>
                  <p className="leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
