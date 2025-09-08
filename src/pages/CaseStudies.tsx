import { TrendingUp, Users, DollarSign, Target, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Summit Roofing Solutions",
      location: "Denver, Colorado", 
      timeframe: "18 months",
      challenge: "Family-owned roofing company struggling with inconsistent revenue, lack of systems, and difficulty scaling beyond $2M annually despite 15 years in business.",
      solution: "Implemented comprehensive growth strategy including operational systems overhaul, sales process optimization, and strategic market positioning.",
      results: [
        { metric: "Revenue Growth", value: "+285%", description: "From $2.1M to $8.1M annually" },
        { metric: "Profit Margin", value: "+12%", description: "Increased from 8% to 20%" },
        { metric: "Team Size", value: "+150%", description: "Grew from 12 to 30 employees" },
        { metric: "Market Share", value: "#1", description: "Became top roofing contractor in region" }
      ],
      testimonial: "Castle Crest transformed our business from a job into a real company. We went from working IN the business to working ON the business.",
      clientName: "Mike Thompson, Owner"
    },
    {
      company: "Elite Roofing & Construction", 
      location: "Austin, Texas",
      timeframe: "24 months",
      challenge: "High-growth roofing company experiencing quality control issues, customer complaints, and declining profitability despite increasing revenue.",
      solution: "Developed robust quality systems, implemented training programs, redesigned customer experience journey, and optimized pricing strategies.",
      results: [
        { metric: "Customer Satisfaction", value: "+45%", description: "Improved from 3.2 to 4.8 stars" },
        { metric: "Revenue Per Job", value: "+38%", description: "Average project value increased" },
        { metric: "Employee Retention", value: "+60%", description: "Reduced turnover significantly" },
        { metric: "Referral Rate", value: "+180%", description: "Word-of-mouth became primary lead source" }
      ],
      testimonial: "The systems and processes we implemented have completely transformed our operations. We're now the go-to premium roofing company in Austin.",
      clientName: "Sarah Rodriguez, CEO"
    },
    {
      company: "Heritage Roofing Company",
      location: "Nashville, Tennessee", 
      timeframe: "12 months",
      challenge: "Second-generation roofing business preparing for ownership transition while needing to modernize operations and increase company value.",
      solution: "Executed comprehensive exit planning strategy including business valuation enhancement, operational improvements, and succession planning.",
      results: [
        { metric: "Business Valuation", value: "+220%", description: "Increased company value significantly" },
        { metric: "EBITDA Margin", value: "+18%", description: "Improved operational efficiency" },
        { metric: "Digital Presence", value: "+400%", description: "Modern brand and marketing systems" },
        { metric: "Exit Readiness", value: "100%", description: "Successfully prepared for transition" }
      ],
      testimonial: "Castle Crest helped us not just improve our business, but prepare it for the next generation. The value they created was incredible.",
      clientName: "Robert & Jennifer Clark, Owners"
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: "180%", label: "Average Revenue Growth" },
    { icon: DollarSign, value: "$25M+", label: "Client Revenue Generated" },
    { icon: Users, value: "50+", label: "Companies Transformed" },
    { icon: Target, value: "95%", label: "Success Rate" }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-6">
              Success <span className="text-gradient-gold">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Real results from real roofing companies. See how our strategic consulting has transformed businesses across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="card-elegant p-12 animate-fade-in-up">
                {/* Header */}
                <div className="border-b border-border pb-8 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="heading-serif text-3xl font-bold mb-2">{study.company}</h2>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span>{study.location}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{study.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="heading-serif text-xl font-bold mb-4 text-destructive">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="heading-serif text-xl font-bold mb-4 text-primary">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center p-6 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">{result.value}</div>
                      <div className="font-semibold mb-2">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-gold/10 rounded-lg p-8 border-l-4 border-primary">
                  <blockquote className="text-lg italic mb-4 leading-relaxed">
                    "{study.testimonial}"
                  </blockquote>
                  <cite className="font-semibold text-primary">— {study.clientName}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Ready to Write Your <span className="text-gradient-gold">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of successful roofing companies who have transformed their businesses with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gold text-lg px-8 py-3">
                <Link to="/contact">Start Your Transformation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline-gold">
                <Link to="/services">Explore Our Services <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;