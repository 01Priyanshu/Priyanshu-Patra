"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using a service like EmailJS or a custom API endpoint
      const response = await fetch("https://formsubmit.co/ajax/patrapriyanshu22@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you as soon as possible.",
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at patrapriyanshu22@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="card-hover border-primary/10 glow-on-hover">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Send Me a Message
        </CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
              className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-primary/5 hover:bg-primary/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-primary/5 hover:bg-primary/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-primary/5 hover:bg-primary/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-primary/5 hover:bg-primary/10"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
