"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Pause, Globe, Users, Award, Clock, Zap, Target } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const advantagesRef = useRef<HTMLDivElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    // No about section animation logic
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const sections = [aboutRef.current, advantagesRef.current].filter(Boolean)
    sections.forEach((section) => section && observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const taglines = [
    "We are selling peace of mind",
    "Your Scope. Your Format. Your Timeline. We Estimate It All.",
    "Your trade. Your workflow. Our expertise.",
    "You Build. We Back You Up.",
  ]

  const advantages = [
    { icon: Target, title: "Custom Estimating Support", desc: "Designed to fit your workflow" },
    { icon: Zap, title: "Tailored to Your Process", desc: "Templates, naming, cost codes" },
    { icon: Users, title: "Multi-Trade Expertise", desc: "Drywall to electrical, we handle all" },
    { icon: Clock, title: "Fast Turnarounds", desc: "Meet tight bidding deadlines" },
    { icon: Globe, title: "Global Reach", desc: "USA, Canada, UK, Australia" },
    { icon: Award, title: "Accuracy You Can Count On", desc: "Every quantity is double-checked" },
  ]

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Floating Feedback Button */}
      <button
        className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-200"
        onClick={() => setShowFeedback(true)}
      >
        Leave Feedback
      </button>
      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold"
              onClick={() => setShowFeedback(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Client Feedback</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Testimonial</label>
                <textarea className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Your feedback..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition-all">Submit</button>
            </form>
          </div>
        </div>
      )}
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-3xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      {/* Hero Section with Advanced Parallax */}
      <section ref={heroRef} className="relative h-screen transition-all duration-700">
        <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover scale-110">
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-800/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
              }}
            />
          ))}
        </div>

        {/* Hero Content with Staggered Animation */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-32 h-32 mb-6 mx-auto drop-shadow-xl rounded-full bg-white/80 p-2" />
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 text-lg px-6 py-2 mb-6">
                Trusted Worldwide • USA • Canada • UK • Australia
              </Badge>
            </div>

            <h1
              className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="inline bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                The Value
              </span>
              <span className="inline text-blue-400 transform -skew-x-6 ml-2">Engineering</span>
            </h1>

            {/* Rotating Taglines */}
            <div
              className="h-20 mb-12 flex items-center justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-xl md:text-3xl text-gray-200 font-light max-w-4xl leading-relaxed">
                {taglines.map((tagline, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                      Math.floor(Date.now() / 1800) % taglines.length === index
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-4"
                    }`}
                  >
                    "{tagline}"
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <Link href="/contact">
                  Get Free Sample
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={toggleVideo}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl font-bold rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                {isVideoPlaying ? <Pause className="mr-3 h-6 w-6" /> : <Play className="mr-3 h-6 w-6" />}
                {isVideoPlaying ? "Pause" : "Play"}
              </Button>
            </div>
          </div>
        </div>

        {/* Advanced Scroll Indicator */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-sm font-medium tracking-wider uppercase">Discover More</span>
            <div className="w-8 h-16 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-6 bg-gradient-to-b from-white to-transparent rounded-full mt-3 animate-pulse" />
            </div>
          </div>
        </div> */}
      </section>

      {/* Who We Are Section with Advanced Animations */}
      <section
        id="about"
        ref={aboutRef}
        className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden z-30"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                }`}
              >
                <div className="mb-8">
                  <Badge className="bg-blue-100 text-blue-800 text-sm px-4 py-2 mb-6">Who We Are</Badge>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-8 leading-tight">
                    Trusted Estimating Partner for
                    <span className="block text-blue-600 transform skew-x-3">Modern Construction</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    At The Value Engineering, we bridge the gap between precision and performance. We're not just a team
                    of estimators - we're construction professionals who understand how real-world building decisions
                    start on the drawing board.
                  </p>
                  <p>
                    Our job is simple: help you win more bids and complete more profitable projects by giving you
                    quantity takeoffs that are not just accurate but built around how you work.
                  </p>
                  <p>
                    Whether you're a growing contractor, a busy subcontractor, or an international construction firm, we
                    act as an extension of your estimating team with no overhead, no training required, and zero
                    compromises on quality.
                  </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 text-lg font-semibold rounded-full group"
                    asChild
                  >
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                    asChild
                  >
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                }`}
              >
                <div className="relative">
                  {/* Floating Cards */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "500+", label: "Projects Completed", delay: "0s" },
                      { number: "98%", label: "Accuracy Rate", delay: "0.2s" },
                      { number: "4", label: "Countries Served", delay: "0.4s" },
                      { number: "24/7", label: "Support Available", delay: "0.6s" },
                    ].map((stat, index) => (
                      <Card
                        key={index}
                        className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        style={{ animationDelay: stat.delay }}
                      >
                        <CardContent className="p-8 text-center">
                          <div className="text-4xl font-black text-blue-600 mb-3">{stat.number}</div>
                          <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-slate-400/20 to-transparent rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      {/* The 'Why Choose Us' section has been removed as per request */}
    </div>
  )
}
