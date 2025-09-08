import { ArrowRight, Shield, TrendingUp, Users, Award, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Scale your operations and revenue with proven growth frameworks designed specifically for roofing contractors."
    },
    {
      icon: Users,
      title: "Operations & Systems", 
      description: "Build scalable systems that ensure consistent quality, efficiency, and profitability across all projects."
    },
    {
      icon: Award,
      title: "Branding & Marketing",
      description: "Develop a premium brand that commands higher prices and attracts quality customers consistently."
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Industry Expertise",
      description: "15+ years of roofing industry experience with proven results across 50+ companies nationwide."
    },
    {
      icon: TrendingUp, 
      title: "Measurable Results",
      description: "Our clients achieve average revenue growth of 180% within 24 months of implementation."
    },
    {
      icon: Award,
      title: "Proven Framework",
      description: "Time-tested methodologies that have generated over $25M in additional revenue for our clients."
    }
  ];

  const testimonials = [
    {
      text: "Castle Crest transformed our family business from a $2M company to over $8M in just 18 months. Their strategies work.",
      author: "Mike Thompson",
      company: "Summit Roofing Solutions",
      rating: 5
    },
    {
      text: "The systems and processes they implemented have completely transformed our operations. We're now the premium choice in our market.",
      author: "Sarah Rodriguez", 
      company: "Elite Roofing & Construction",
      rating: 5
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h1 className="heading-serif text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Helping Roofing Companies 
                <span className="text-gradient-gold block mt-2">Reach New Heights</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Transform your roofing business with strategic consulting that delivers measurable growth, 
                operational excellence, and sustainable profitability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="btn-gold text-lg px-8 py-4">
                  <Link to="/contact">
                    Schedule Your Strategy Call
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-outline-gold">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div>Companies Transformed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">180%</div>
                  <div>Average Revenue Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$25M+</div>
                  <div>Revenue Generated</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="card-elegant p-12 max-w-md bg-gradient-dark">
                <img 
                  src="/images/cc_consulting_logo.png" 
                  alt="Castle Crest Roofing Logo" 
                  className="w-full h-auto mb-6 filter brightness-110"
                />
                <div className="text-center">
                  <h3 className="heading-serif text-2xl font-bold mb-3 text-primary">Castle Crest Roofing</h3>
                  <p className="text-lg font-medium text-muted-foreground">Premium Business Consulting</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      "Where roofing expertise meets Fortune 500 strategy"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Comprehensive <span className="text-gradient-gold">Business Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end consulting services designed to transform roofing businesses into market-leading enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-8 text-center hover:shadow-gold transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-6">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="heading-serif text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="btn-outline-gold">
              <Link to="/services">
                View All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient-gold">Castle Crest</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine deep roofing industry knowledge with world-class business consulting expertise to deliver unmatched results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-6 bg-gradient-gold rounded-full w-fit mx-auto mb-6">
                  <reason.icon className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="heading-serif text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Client <span className="text-gradient-gold">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't take our word for it. Here's what our clients say about working with Castle Crest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <cite className="font-semibold text-primary">{testimonial.author}</cite>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="btn-outline-gold">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="card-elegant p-12 text-center max-w-4xl mx-auto">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Ready to Build Your <span className="text-gradient-gold">Roofing Empire</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule your complimentary strategy session and discover how we can accelerate your growth, 
              optimize your operations, and maximize your profitability.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>30-minute strategy session</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Custom growth roadmap</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>No obligation required</span>
              </div>
            </div>

            <Button asChild size="lg" className="btn-gold text-xl px-12 py-4">
              <Link to="/contact">
                Schedule Your Strategy Call
                <ArrowRight className="h-6 w-6 ml-3" />
              </Link>
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Join 50+ successful roofing contractors who have transformed their businesses with Castle Crest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
