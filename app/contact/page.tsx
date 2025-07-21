"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Send, CheckCircle, MessageSquare, Globe } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Me Directly",
      details: ["Main: +1 (555) 123-4567", "WhatsApp: +1 (555) 987-6543"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["quotes@thevalueengineering.com", "info@thevalueengineering.com"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: ["WhatsApp Business", "Zoom Meetings Available"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Globe,
      title: "Global Reach",
      details: ["USA • Canada • UK • Australia", "Imperial & Metric Systems"],
      color: "from-orange-500 to-orange-600",
    },
  ]

  const projectTypes = [
    "Residential Construction",
    "Commercial Building",
    "Industrial Facility",
    "Infrastructure Project",
    "Renovation/Remodel",
    "Multi-Family Housing",
    "Retail/Office Space",
    "Other",
  ]

  const budgetRanges = [
    "Under $100,000",
    "$100,000 - $500,000",
    "$500,000 - $1,000,000",
    "$1,000,000 - $5,000,000",
    "Over $5,000,000",
    "Prefer not to say",
  ]

  return (
    <div
      className={`min-h-screen pt-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 text-base px-4 py-2 mb-4 font-normal rounded">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Get In Touch
              <span className="block text-blue-400">We're Here to Help</span>
            </h1>
            {/* <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto text-justify">
              📞 Call Me Directly – [Your Name / Number here]<br />
              📩 Or email us through the contact form below.<br />
              🖼️ Portfolio photos & details will be provided later.<br />
              🎥 Background Video — Will be added on homepage.<br />
              🎨 Logo & Color Scheme — Updated per branding.
            </p> */}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group rounded-xl"
                >
                  <CardContent className="p-6 text-left">
                    <div className="mb-4 relative flex items-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow group-hover:scale-105 transition-transform duration-200`}
                      >
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{method.title}</h3>
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-600 text-sm leading-relaxed mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-left mb-8">
              <Badge className="bg-blue-100 text-blue-800 text-base px-3 py-1 mb-3 font-normal rounded">Free Sample Request</Badge>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Get Your Free Sample</h2>
              <p className="text-base text-slate-600 max-w-2xl text-justify">
                Send us your project details and we'll provide a no-cost sample takeoff to demonstrate our quality.
              </p>
            </div>

            <Card className="border border-slate-200 shadow bg-white rounded-xl">
              <CardHeader className="text-left pb-4">
                <CardTitle className="text-xl text-slate-800 font-semibold">Project Information</CardTitle>
                <p className="text-slate-600 text-sm">Tell us about your project and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700 mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-12 border-slate-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-12 border-slate-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="h-12 border-slate-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="h-12 border-slate-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="h-12 border-slate-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Project Location
                      </Label>
                      <Input
                        id="location"
                        placeholder="City, State/Province"
                        className="h-12 border-slate-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="projectType" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Project Type *
                      </Label>
                      <select
                        id="projectType"
                        className="w-full h-12 px-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm font-semibold text-slate-700 mb-2 block">
                        Estimated Budget
                      </Label>
                      <select
                        id="budget"
                        className="w-full h-12 px-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range.toLowerCase().replace(/\s+/g, "-")}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="trades" className="text-sm font-semibold text-slate-700 mb-2 block">
                      Trades Needed
                    </Label>
                    <Input
                      id="trades"
                      placeholder="e.g., Drywall, Flooring, Electrical, HVAC"
                      className="h-12 border-slate-300 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-sm font-semibold text-slate-700 mb-2 block">
                      Project Timeline
                    </Label>
                    <Input
                      id="timeline"
                      placeholder="When do you need the estimate?"
                      className="h-12 border-slate-300 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project requirements, any specific formatting needs, software preferences, and what you'd like included in the free sample..."
                      rows={6}
                      required
                      className="border-slate-300 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-3">What You'll Receive:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Free sample takeoff",
                        "Custom formatted to your needs",
                        "No commitment required",
                        "24-hour response time",
                        "Quality demonstration",
                        "Workflow consultation",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-3 h-6 w-6" />
                        Request Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-6 w-6" />
                        Send Free Sample Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
