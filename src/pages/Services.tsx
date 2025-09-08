import { TrendingUp, Megaphone, Settings, Users, LogOut, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      subtitle: "Scale Your Operations & Revenue",
      description: "Comprehensive growth planning that transforms your roofing company into a market leader.",
      features: [
        "Revenue optimization analysis",
        "Market expansion strategies", 
        "Competitive positioning",
        "Profit margin improvement",
        "Sales process enhancement"
      ]
    },
    {
      icon: Megaphone,
      title: "Branding & Marketing Consulting",
      subtitle: "Build a Premium Brand That Sells",
      description: "Elevate your brand above commodity pricing with strategic marketing that attracts premium customers.",
      features: [
        "Brand identity development",
        "Digital marketing strategy",
        "Lead generation systems",
        "Customer acquisition funnels",
        "Reputation management"
      ]
    },
    {
      icon: Settings,
      title: "Operations & Systems",
      subtitle: "Build a Business That Runs Itself",
      description: "Implement scalable systems and processes that ensure consistent quality and profitability.",
      features: [
        "Standard operating procedures",
        "Quality control systems",
        "Technology integration",
        "Performance metrics & KPIs",
        "Workflow optimization"
      ]
    },
    {
      icon: Users,
      title: "Recruiting & Training",
      subtitle: "Build Your Dream Team",
      description: "Attract, hire, and develop top-tier talent that drives your company's success.",
      features: [
        "Recruitment strategy design",
        "Interview process optimization",
        "Training program development",
        "Performance management systems",
        "Leadership development"
      ]
    },
    {
      icon: LogOut,
      title: "Exit Planning",
      subtitle: "Maximize Your Business Value",
      description: "Prepare your company for a profitable exit or succession with strategic value enhancement.",
      features: [
        "Business valuation analysis",
        "Value enhancement strategies",
        "Due diligence preparation",
        "Succession planning",
        "M&A advisory services"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current operations, financials, and market position."
    },
    {
      number: "02", 
      title: "Strategic Planning",
      description: "Custom roadmap development with clear milestones and measurable objectives."
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "Hands-on guidance and accountability to ensure successful execution."
    },
    {
      number: "04",
      title: "Performance Optimization",
      description: "Continuous monitoring, adjustment, and optimization for maximum results."
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-6">
              Consulting <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business consulting designed specifically for roofing contractors who are serious about growth, profitability, and building lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="heading-serif text-3xl font-bold">{service.title}</h2>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="btn-outline-gold">
                    <Link to="/contact">Learn More <ArrowRight className="h-4 w-4 ml-2" /></Link>
                  </Button>
                </div>

                <div className={`card-elegant p-8 animate-scale-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-square bg-gradient-gold rounded-lg flex items-center justify-center">
                    <service.icon className="h-20 w-20 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Our Proven <span className="text-gradient-gold">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that ensures measurable results and sustainable growth for your roofing business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="heading-serif text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-elegant p-12 text-center max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold mb-6">
              Ready to Accelerate Your <span className="text-gradient-gold">Growth</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a complimentary strategy session to discuss your business goals and explore how our services can transform your roofing company.
            </p>
            <Button asChild size="lg" className="btn-gold text-lg px-8 py-3">
              <Link to="/contact">Schedule Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;