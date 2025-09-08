import { Shield, Award, Target, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in every client relationship."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional results through proven strategies and meticulous execution."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every recommendation is designed to drive measurable growth and profitability."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work alongside you as trusted advisors, not just external consultants."
    }
  ];

  const credentials = [
    "15+ years roofing industry experience",
    "MBA in Business Strategy",
    "Certified Business Coach",
    "Licensed contractor background",
    "Former roofing company owner"
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient-gold">Castle Crest</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Founded on the principle that every roofing company deserves world-class business guidance, 
              we bring Fortune 500 consulting expertise to the roofing industry.
            </p>
          </div>
        </div>
      </section>

      {/* Consultant Background */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="heading-serif text-4xl font-bold mb-6">
                Meet Your <span className="text-gradient-gold">Strategic Partner</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  With over 15 years of combined experience in roofing operations and business consulting, 
                  our founder brings a unique perspective that bridges the gap between industry knowledge 
                  and strategic business acumen.
                </p>
                <p>
                  Having built and successfully exited a seven-figure roofing company, we understand the 
                  challenges you face—from managing crews and handling customer expectations to scaling 
                  operations and optimizing profitability.
                </p>
                <p>
                  Our mission is simple: to help roofing contractors build businesses that work without them, 
                  creating sustainable wealth and industry leadership.
                </p>
              </div>
            </div>

            <div className="card-elegant p-8 animate-scale-in">
              <h3 className="heading-serif text-2xl font-bold mb-6 text-primary">Credentials & Experience</h3>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{credential}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-primary">Track Record</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Helped 50+ roofing companies achieve average revenue growth of 180% within 24 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl font-bold mb-6">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every client interaction and strategic recommendation we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elegant p-8 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="heading-serif text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              Ready to Transform Your <span className="text-gradient-gold">Roofing Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven strategies can accelerate your growth and build the roofing empire you've always envisioned.
            </p>
            <Button asChild size="lg" className="btn-gold text-lg px-8 py-3">
              <Link to="/contact">Schedule Your Strategy Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;