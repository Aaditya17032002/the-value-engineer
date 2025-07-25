"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Pause, Globe, Users, Award, Clock, Zap, Target, MessageCircle } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import SmoothFollower from "@/components/smooth-follower"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const advantagesRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [showFeedback, setShowFeedback] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testimonial: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

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

  const taglines = [
    "We are selling peace of mind",
    "Your Scope. Your Format. Your Timeline. We Estimate It All.",
    "Your trade. Your workflow. Our expertise.",
    "You Build. We Back You Up.",
  ]

  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2600); // 1600ms for a slower, more readable animation
    return () => clearInterval(interval);
  }, [taglines.length]);

  const advantages = [
    { icon: Target, title: "Custom Estimating Support", desc: "Designed to fit your workflow" },
    { icon: Zap, title: "Tailored to Your Process", desc: "Templates, naming, cost codes" },
    { icon: Users, title: "Multi-Trade Expertise", desc: "Drywall to electrical, we handle all" },
    { icon: Clock, title: "Fast Turnarounds", desc: "Meet tight bidding deadlines" },
    { icon: Globe, title: "Global Reach", desc: "USA, Canada, UK, Australia" },
    { icon: Award, title: "Accuracy You Can Count On", desc: "Every quantity is double-checked" },
  ]

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.testimonial) {
      setSubmitStatus('error')
      setSubmitMessage('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your feedback has been submitted successfully.')
        setFormData({ name: '', email: '', phone: '', testimonial: '' })
        // Close modal after 2 seconds
        setTimeout(() => {
          setShowFeedback(false)
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 2000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to submit feedback. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Smooth Follower Cursor */}
      <SmoothFollower />
      
      {/* Floating Feedback Button */}
      {/* Show icon on mobile, full button on sm+ */}
      <button
        className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-200 hidden sm:block"
        onClick={() => setShowFeedback(true)}
      >
        Leave Feedback
      </button>
      <button
        className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 block sm:hidden"
        onClick={() => setShowFeedback(true)}
        aria-label="Leave Feedback"
      >
        <MessageCircle className="w-6 h-6" />
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
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {submitMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your Name" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="you@email.com" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="+1 (555) 123-4567" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Testimonial *</label>
                <textarea 
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  rows={4} 
                  placeholder="Your feedback..." 
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 rounded font-semibold transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919687150213"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-3xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      {/* Hero Section with Advanced Parallax */}
      <section ref={heroRef} className="relative h-[70vh] sm:h-screen transition-all duration-700 flex items-center justify-center px-2 sm:px-0">
        {/* Gradient overlay for readability over video background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10151A]/80 via-[#1e3a8a]/40 to-[#10151A]/90 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#52C5D0]/30 rounded-full animate-pulse"
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
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white px-2 sm:px-6">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-6 mx-auto drop-shadow-xl rounded-full  p-2" />
          <div className="max-w-2xl sm:max-w-6xl mx-auto text-center">
            <div className="mb-4 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Badge className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white border-[#FF6B35]/30 text-base sm:text-lg px-4 sm:px-6 py-2 mb-4 sm:mb-6 shadow-lg">
                Trusted Worldwide • USA • Canada • UK • Australia
              </Badge>
            </div>

            <h1
              className="text-3xl xs:text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-8 leading-tight animate-fade-in-up text-white"
              style={{ 
                animationDelay: "0.4s",
                textShadow: `
                  -1px -1px 0 #52C5D0,
                  1px -1px 0 #52C5D0,
                  -1px 1px 0 #52C5D0,
                  1px 1px 0 #52C5D0
                `
              }}
            >
              <span className="inline">
                The Value
              </span>
              <span className="inline transform -skew-x-6 ml-2">Engineering</span>
            </h1>

            {/* Rotating Taglines */}
            <div
              className="h-12 sm:h-20 mb-6 sm:mb-12 flex items-center justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-base xs:text-lg sm:text-3xl text-gray-200 font-light max-w-xs xs:max-w-xl sm:max-w-4xl leading-relaxed transition-all duration-400">
                <div key={taglineIndex} className="transition-all duration-400 opacity-100 transform translate-y-0">
                  "{taglines[taglineIndex]}"
                </div>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#52C5D0] hover:bg-[#3bb6c2] text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <Link href="/contact">
                  Get Free Sample
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              {/* Play/Pause button removed since video is now global and always playing */}
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

      {/* Who We Are Section with Static Background Video */}
      <section
        id="about"
        ref={aboutRef}
        className="py-32 relative overflow-hidden z-30"
      >
        {/* Static Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) contrast(1.2)' }}
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Transparent Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                }`}
              >
                <div className="mb-8">
                  <Badge className="bg-[#52C5D0]/20 text-[#fff] text-sm px-4 py-2 mb-6">Who We Are</Badge>
                  <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-white">
                    Trusted Estimating Partner for
                    <span className="block text-[#52C5D0] transform skew-x-3">Modern Construction</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-gray-200">
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
                    className="bg-slate-800/80 backdrop-blur-sm hover:bg-slate-900/90 text-[#52C5D0] px-8 py-4 text-lg font-semibold rounded-full group border border-[#52C5D0]"
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
                    className="border-2 border-[#52C5D0] text-[#52C5D0] hover:bg-[#52C5D0]/10 px-8 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm"
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
                        className="bg-black/40 backdrop-blur-md border border-[#52C5D0]/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        style={{ animationDelay: stat.delay }}
                      >
                        <CardContent className="p-8 text-center">
                          <div className="text-4xl font-black text-[#52C5D0] mb-3">{stat.number}</div>
                          <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#52C5D0]/20 to-transparent rounded-full blur-xl" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#52C5D0]/20 to-transparent rounded-full blur-xl" />
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
