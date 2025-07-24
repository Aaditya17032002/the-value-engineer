"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Target, TrendingUp, Globe, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const values = [
    {
      icon: Target,
      title: "Precision First",
      description: "Every estimate is meticulously calculated with attention to detail and field-smart understanding",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work as an extension of your team, understanding your unique workflow and requirements",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering the highest quality service with double-checked accuracy",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Leveraging latest technology and methodologies for superior results",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Serving clients across USA, Canada, UK, and Australia with local understanding",
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "Our philosophy: we are selling peace of mind through accurate, reliable estimates",
    },
  ]

  const achievements = [
    { number: "500+", label: "Projects Completed", desc: "Across residential, commercial, and industrial sectors" },
    { number: "98%", label: "Accuracy Rate", desc: "Double-checked quantities you can trust" },
    { number: "4", label: "Countries Served", desc: "USA, Canada, UK, Australia" },
    { number: "24/7", label: "Support Available", desc: "Email, WhatsApp, Zoom communication" },
  ]

  const customFeatures = [
    "Your Template Format — Excel, PlanSwift, Bluebeam, or custom",
    "Your Division Format — CSI, NRM, or your structure",
    "Your Level of Detail — By floor, phase, or trade",
    "Your Drawing Conventions — We follow your naming logic",
    "Your Preferred Software — OST, PlanSwift, Bluebeam, Procore",
    "Your Timeline — Fast delivery or milestone-based scheduling",
  ]

  return (
    <div
      className={`min-h-screen pt-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } bg-gradient-to-b from-[#10151A] via-black/90 to-transparent text-[#52C5D0]`}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#10151A] via-black/90 to-transparent text-[#52C5D0] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#52C5D0]/20 text-[#52C5D0] border-[#52C5D0]/30 text-base px-4 py-2 mb-4 font-normal rounded">
              Who We Are
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Trusted Estimating Partner for
              <span className="block text-[#52C5D0]">Modern Construction</span>
            </h1>
            <p className="text-lg md:text-xl text-[#52C5D0] leading-relaxed max-w-2xl mx-auto text-justify">
              At The Value Engineering, we bridge the gap between precision and performance. We’re not just a team of estimators - we’re construction professionals who understand how real-world building decisions start on the drawing board.
              <br /><br />
              Our job is simple: help you win more bids and complete more profitable projects by giving you quantity takeoffs that are not just accurate but built around how you work. From CSI divisions to your custom cost codes, we mirror your workflow so there’s no need to adapt—just plug and play.
              <br /><br />
              Whether you're a growing contractor, a busy subcontractor, or an international construction firm, we act as an extension of your estimating team with no overhead, no training required, and zero compromises on quality.
              <br /><br />
              With clients across the United States, Canada, the UK, and Australia, we’ve earned the trust of builders worldwide. What truly sets us apart is our philosophy: we are selling peace of mind. When you know your estimates are accurate, formatted your way, and delivered on time, you can focus on what really matters: building.
              <br /><br />
              Because when you work with The Value Engineering, you’re not just outsourcing—you’re upgrading.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="bg-[#52C5D0]/20 text-[#52C5D0] text-base px-3 py-1 mb-3 font-normal rounded">
                  Our Mission
                </Badge>
                <h2 className="text-3xl font-bold text-[#52C5D0] mb-4 leading-tight">
                  We Are Selling
                  <span className="block text-[#52C5D0]">Peace of Mind</span>
                </h2>
                <div className="space-y-4 text-base text-[#52C5D0] leading-relaxed text-justify">
                  <p>
                    At The Value Engineering, we understand that accurate estimates are the foundation of successful
                    construction projects. Our job is simple: help you win more bids and complete more profitable
                    projects.
                  </p>
                  <p>
                    From CSI divisions to your custom cost codes, we mirror your workflow so there's no need to adapt –
                    just plug and play. Whether you're a growing contractor, busy subcontractor, or international
                    construction firm, we act as your remote estimating department.
                  </p>
                  <p>
                    What truly sets us apart is our philosophy: when you know your estimates are accurate, formatted
                    your way, and delivered on time, you can focus on what really matters: building.
                  </p>
                  <p className="text-lg font-semibold text-[#52C5D0]">
                    Because when you work with The Value Engineering, you're not just outsourcing – you're upgrading.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-[#10151A]/80 border border-[#52C5D0] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-6 text-left">
                      <div className="text-2xl font-bold text-[#52C5D0] mb-1">{achievement.number}</div>
                      <div className="text-sm font-semibold text-[#52C5D0] mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-[#52C5D0]">{achievement.desc}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Features Section */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-left mb-10">
              <Badge className="bg-[#52C5D0]/20 text-[#52C5D0] text-base px-3 py-1 mb-3 font-normal rounded">
                Fully Customized
              </Badge>
              <h2 className="text-3xl font-bold text-[#52C5D0] mb-4 leading-tight">
                Built Around
                <span className="block text-[#52C5D0]">Your Workflow</span>
              </h2>
              <p className="text-base text-[#52C5D0] max-w-3xl text-justify">
                We tailor every estimate to match your workflow, tools, and standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {customFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#10151A]/80 border border-[#52C5D0] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-4 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#52C5D0] flex-shrink-0 mt-1" />
                      <span className="text-[#52C5D0] font-medium leading-relaxed">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-left mb-10">
              <Badge className="bg-[#52C5D0]/20 text-[#52C5D0] text-base px-3 py-1 mb-3 font-normal rounded">
                Our Core Values
              </Badge>
              <h2 className="text-3xl font-bold text-[#52C5D0] mb-4 leading-tight">
                What Drives Us
                <span className="block text-[#52C5D0]">Every Day</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-[#10151A]/80 border border-[#52C5D0] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group"
                >
                  <CardContent className="p-6 text-left">
                    <div className="mb-4 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#52C5D0] to-[#10151A] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-8 w-8 text-[#10151A]" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#52C5D0]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#52C5D0] mb-2">{value.title}</h3>
                    <p className="text-[#52C5D0] leading-relaxed text-justify">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-[#10151A] via-black/90 to-transparent text-[#52C5D0] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-6 text-left relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-lg mb-6 text-[#52C5D0] leading-relaxed text-justify">
              Let us show you how accurate, customized estimates can transform your bidding process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button
                size="lg"
                className="bg-[#52C5D0] hover:bg-[#3bb6c2] text-[#10151A] px-8 py-4 text-lg font-bold rounded shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get Free Sample</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#52C5D0] text-[#52C5D0] hover:bg-[#10151A] px-8 py-4 text-lg font-bold rounded backdrop-blur-sm transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
