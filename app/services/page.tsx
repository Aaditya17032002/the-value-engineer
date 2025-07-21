"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Hammer,
  Palette,
  ChefHat,
  Home,
  Building2,
  Wrench,
  DoorOpen,
  TreePine,
  Snowflake,
  Zap,
  Droplets,
  Sun,
  PenTool,
  CuboidIcon as Cube,
  Eye,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: Hammer,
      title: "Drywall & Steel Stud Framing",
      description: "Complete interior & exterior gypsum board systems with precision takeoffs",
      features: [
        "Interior & exterior gypsum board systems",
        "Load-bearing / non-load-bearing LGSF",
        "Fire-rated & moisture-resistant board takeoffs",
        "Fasteners, clips, channels, and accessories",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "Painting & Coating Estimates",
      description: "Comprehensive coverage calculations for all coating applications",
      features: [
        "Primer, finish coats, & specialty coatings",
        "Decorative, anti-microbial, and industrial paints",
        "Interior & exterior coverage formulas",
        "Surface preparation requirements",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: ChefHat,
      title: "Countertop & Cabinet Estimating",
      description: "Detailed measurements for all countertop and cabinetry projects",
      features: [
        "Quartz, granite, marble, solid surface",
        "Edge profiles, cutouts, and backsplashes",
        "Residential kitchens to commercial casework",
        "Hardware and installation accessories",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Home,
      title: "Flooring & Baseboard",
      description: "Room-by-room flooring calculations with waste factors",
      features: [
        "Tile, carpet, LVT, hardwood, epoxy",
        "Underlayment, trims, and transitions",
        "Room-by-room waste factors",
        "Subfloor preparation requirements",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Building2,
      title: "Exterior Cladding & Façade",
      description: "Complete exterior envelope systems and components",
      features: [
        "ACM, EIFS, fiber cement panels",
        "Weather barriers, trims, expansion joints",
        "Sub-framing, insulation, and sealants",
        "Architectural details and accessories",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Wrench,
      title: "Concrete Estimating",
      description: "Structural concrete with reinforcement and formwork",
      features: [
        "Foundations, slabs, structural members",
        "Rebar, mesh, and formwork surface area",
        "Concrete accessories and finishes",
        "Curing and protection materials",
      ],
      color: "from-gray-500 to-gray-600",
    },
    {
      icon: DoorOpen,
      title: "Doors, Hardware & Accessories",
      description: "Complete door systems with hardware schedules",
      features: [
        "Hollow metal, wood, aluminum doors",
        "Locks, hinges, closers, and full hardware sets",
        "Toilet partitions, grab bars, mirrors, dispensers",
        "Matched to floor plans and hardware schedules",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: TreePine,
      title: "Rough Carpentry",
      description: "Structural framing and rough carpentry components",
      features: [
        "Joists, studs, blocking, headers, trusses",
        "Roof decking, subflooring, and sheathing",
        "Structural hardware and fasteners",
        "Engineered lumber products",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Sun,
      title: "Insulation Estimating",
      description: "Thermal, acoustic, and fire-rated insulation systems",
      features: [
        "Thermal, acoustic, & fire-rated insulation",
        "Pipe, duct, slab & roof insulation",
        "Cementitious & intumescent fireproofing",
        "Vapor barriers and air sealing",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Home,
      title: "Roofing Estimating",
      description: "Complete roofing systems and components",
      features: [
        "Shingles, metal, TPO, EPDM, BUR",
        "Underlayment, flashing, drainage systems",
        "Roof accessories and penetrations",
        "Insulation and vapor barriers",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Droplets,
      title: "Plumbing Estimating",
      description: "Complete plumbing systems with fixture schedules",
      features: [
        "Fixtures, fittings, and linear pipe footage",
        "Schedules for water supply, drainage, and venting",
        "Pipe insulation and supports",
        "Specialty plumbing systems",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Snowflake,
      title: "HVAC Estimating",
      description: "Mechanical systems with ductwork and piping",
      features: [
        "AHUs, RTUs, chillers, ductwork",
        "Piping, insulation, supports, accessories",
        "Controls and automation systems",
        "Energy recovery and specialty equipment",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TreePine,
      title: "Landscaping Estimating",
      description: "Site work and landscaping material quantities",
      features: [
        "Turf, gravel, planting, hardscape materials",
        "Irrigation & drainage quantities",
        "Site preparation and grading",
        "Outdoor structures and amenities",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Electrical Estimating",
      description: "Complete electrical systems and components",
      features: [
        "Lighting, power, low-voltage systems",
        "Wire lengths, panel boards, conduits",
        "Fixture counts, load calculations",
        "Emergency and specialty systems",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: PenTool,
      title: "Drafting Services",
      description: "Professional CAD drafting and documentation",
      features: [
        "2D CAD drafting (architectural, structural)",
        "As-built & permit-ready drawings",
        "Sketch-to-drawing conversion",
        "Construction documentation",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cube,
      title: "Shop Drawings",
      description: "Fabrication drawings and submittal packages",
      features: [
        "Fabrication drawings: drywall, doors, hardware",
        "Submittal-ready formats with markups",
        "Coordination drawings",
        "Installation details and sections",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Eye,
      title: "3D Rendering & Visualization",
      description: "Photo-realistic renderings and walkthroughs",
      features: [
        "Interior & exterior 3D models",
        "Concept walkthroughs & photo-realistic renderings",
        "Virtual reality presentations",
        "Marketing and presentation materials",
      ],
      color: "from-red-500 to-pink-500",
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Complete Estimating
              <span className="block text-blue-400">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto text-justify">
              Explore our full range of estimating and drafting services. Every estimate is tailored to your workflow, your format, and your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-left mb-10">
              <Badge className="bg-blue-100 text-blue-800 text-base px-3 py-1 mb-3 font-normal rounded">
                Multi-Trade Expertise
              </Badge>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
                We Handle
                <span className="block text-blue-600">Every Trade</span>
              </h2>
              <p className="text-base text-slate-600 max-w-3xl text-justify">
                Comprehensive quantity takeoffs across all construction trades, formatted to your specifications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-6 relative">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div
                        className={`absolute bg-gradient-to-br ${service.color} opacity-8 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </div>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="bg-blue-100 text-blue-800 text-sm px-4 py-2 mb-6">Our Process</Badge>
              <h2 className="text-5xl font-black text-slate-800 mb-8 leading-tight">
                How We
                <span className="block text-blue-600">Deliver Excellence</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Project Analysis",
                  description: "Review plans, specifications, and your requirements",
                },
                {
                  step: "02",
                  title: "Custom Setup",
                  description: "Configure templates and formats to match your workflow",
                },
                {
                  step: "03",
                  title: "Quantity Takeoff",
                  description: "Detailed measurements using industry-leading software",
                },
                { step: "04", title: "Quality Delivery", description: "Double-checked estimates delivered on time" },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-xl">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{process.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Experience our service with a free sample takeoff – no strings attached.
            </p>
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
          </div>
        </div>
      </section>
    </div>
  )
}
