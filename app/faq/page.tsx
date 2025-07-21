"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqs = [
    {
      question: "Do you include labor or material pricing in the estimates?",
      answer:
        "No. We only provide quantities. You can apply your own pricing as per vendor or region. This allows you to maintain control over your pricing strategy and vendor relationships.",
    },
    {
      question: "What types of projects do you work on?",
      answer:
        "We cover residential, commercial, and industrial projects of all sizes. From single-family homes to large commercial complexes and industrial facilities.",
    },
    {
      question: "Which trades do you cover?",
      answer:
        "Almost all trades from drywall, flooring, HVAC, electrical, to landscaping. We have expertise across 17+ different construction trades and specialties.",
    },
    {
      question: "How do I get started?",
      answer:
        "Just send us your project files and what you need. We'll handle the rest. We'll review your requirements and provide a free sample to demonstrate our quality and approach.",
    },
    {
      question: "Can I request a sample before committing?",
      answer:
        "Yes, we offer a no-cost sample so you can check the quality. This allows you to experience our service and see how we match your workflow before making any commitment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept SWIFT/ACH bank transfers, PayPal, and Wise. We work with international clients and accommodate various payment preferences for your convenience.",
    },
    {
      question: "What estimating software do you use?",
      answer:
        "We use PlanSwift, OST, Bluebeam, and Excel. We're also flexible and can work with your preferred software or format to ensure seamless integration with your workflow.",
    },
    {
      question: "Can you work in our templates or formats?",
      answer:
        "Absolutely. We customize everything to your system. Whether it's your Excel templates, cost code structure, or specific formatting requirements, we adapt to your workflow.",
    },
    {
      question: "Do you handle international projects?",
      answer:
        "Yes, USA, Canada, UK, Australia (Imperial & Metric). We understand local building codes, standards, and measurement conventions for each region we serve.",
    },
    {
      question: "Can you estimate change orders or addenda?",
      answer:
        "Yes, and we can also compare them to your original estimate. We provide detailed analysis of changes and their impact on quantities and scope.",
    },
    {
      question: "Can you attend coordination meetings?",
      answer:
        "Yes, we're available for Zoom/online meetings as needed. We can participate in project coordination, answer questions about our takeoffs, and provide technical support.",
    },
    {
      question: "What's your typical turnaround time?",
      answer:
        "Turnaround times vary based on project complexity, but we specialize in fast delivery to meet tight bidding deadlines. We'll provide a specific timeline when you submit your project.",
    },
    {
      question: "How accurate are your estimates?",
      answer:
        "We maintain a 98% accuracy rate through our double-checking process and field-smart estimators who understand what they're measuring. Every quantity is verified before delivery.",
    },
    {
      question: "Do you provide support after delivery?",
      answer:
        "Yes, we provide ongoing support via email, WhatsApp, and Zoom. If you have questions about the takeoff or need clarifications, we're here to help.",
    },
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
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Frequently Asked
              <span className="block text-blue-400">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto text-justify">
              Find answers to common questions about our estimating services, process, and how to get started.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                      {openItems.has(index) ? (
                        <ChevronUp className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-slate-400 flex-shrink-0" />
                      )}
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openItems.has(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-8 pb-8">
                        <div className="border-t border-slate-200 pt-6">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-slate-800 mb-6">Still Have Questions?</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Can't find what you're looking for? We're here to help with any specific questions about your project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
