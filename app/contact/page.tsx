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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "../hooks/use-toast";
import { z } from "zod";
import { contactMethods, faqItems } from "@/constants/contact_page";
import { useState } from "react";
import { BEDS, image_links } from "@/constants/images-links";
import Link from "next/link"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .optional(),
  phone: z
    .string()
    .refine(
      (val) => !val || /^[09]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\\$]/g, "")),
      {
        message: "Please enter a valid phone number",
      },
    ),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
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
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Send POST request to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
        
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen ">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image
            
              src={BEDS["image2"]}
              alt="Gallery interior"
              fill
              priority
              className="object-cover opacity-10 dark:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background" />
          </div>
        </div>
        {/* Floating Contact Cards */}

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">Let's Create Together</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Get In <span className="text-amber-400 font-serif italic">Touch</span>
                </h1>
                <p className="text-sm md:text-md leading-relaxed max-w-lg">
                  Ready to create something beautiful? We'd love to hear about your project and discuss how we can bring
                  your vision to life with our handcrafted furniture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://t.me/gedi_k" target="_blank" rel="noopener noreferrer">
                    <Button className="gallery-btn-primary" size="lg">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start Conversation
                    </Button>
                  </Link>
                  <Button variant="outline" className="gallery-btn-secondary bg-transparent" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="contact-hero-card">
                  <div className="relative w-[100%] pb-[55.000%]">
                    <iframe 
                      allow="fullscreen;autoplay" 
                      src="https://streamable.com/e/vd8mgo?autoplay=1&muted=1"     
                      className=" w-[100%] h-[100%] absolute overflow:hidden;">
                    </iframe>
                  </div>
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
                        {/* Simple & Intuitive Form */}
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your@email.com (optional)" required={false} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input type="phone" placeholder="0912345678" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject *</FormLabel>
                                <FormControl>
                                  <Input placeholder="How can we help you?" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message *</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Type your message here..." rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button type="submit" className="gallery-btn-primary w-full" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
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
                    src={image_links['image6']}
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
                        <p>
                          Workshop akaki kaliti industry mender
                          <br />
                          Showroom tulu dimtu alem bank road
                        </p>
                        <div className="mt-4 rounded-lg overflow-hidden border border-amber-200 shadow">
                          <iframe
                            src="https://maps.google.com/?q=8.898915,38.756939&output=embed"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Showroom Location"
                          ></iframe>
                        </div>
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
                    src={image_links['image8']}
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
