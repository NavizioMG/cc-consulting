import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours to schedule your strategy session.",
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Schedule a call to discuss your business goals",
      action: "Call (555) 123-4567",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Send us your questions anytime",
      action: "consulting@castlecrest.com",
      available: "Response within 24 hours"
    },
    {
      icon: Calendar,
      title: "Strategy Session",
      description: "Book a complimentary 30-minute consultation",
      action: "Schedule Online",
      available: "Available this week"
    }
  ];

  const benefits = [
    "Complimentary 30-minute strategy session",
    "Custom growth roadmap for your business", 
    "Industry-specific insights and recommendations",
    "No obligation or high-pressure sales tactics",
    "Immediate actionable advice you can implement"
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-6">
              Let's Build Your <span className="text-gradient-gold">Roofing Empire</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your roofing business? Schedule your complimentary strategy session and discover how we can accelerate your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="card-elegant p-8 text-center hover:shadow-gold transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-serif text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{method.description}</p>
                <div className="text-primary font-semibold mb-2">{method.action}</div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{method.available}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card-elegant p-8 animate-fade-in-up">
              <h2 className="heading-serif text-3xl font-bold mb-6">
                Schedule Your <span className="text-gradient-gold">Strategy Session</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to schedule your complimentary consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="ABC Roofing Co."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@abcroofing.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your business goals *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="What challenges are you facing? What are your growth goals? How can we help you succeed?"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="btn-gold w-full text-lg py-4">
                  Schedule My Strategy Session <ArrowRight className="h-5 w-5 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Castle Crest Roofing Consulting. 
                  We respect your privacy and never share your information.
                </p>
              </form>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="card-elegant p-8">
                <h3 className="heading-serif text-2xl font-bold mb-6">
                  What You'll Get in Your <span className="text-gradient-gold">Strategy Session</span>
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elegant p-8">
                <h3 className="heading-serif text-2xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">(555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">consulting@castlecrest.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Service Areas</div>
                      <div className="text-muted-foreground">Nationwide consulting services</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-8 bg-gradient-gold/10">
                <h3 className="heading-serif text-xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't wait to transform your roofing business. The longer you wait, the more opportunities slip away.
                </p>
                <Button size="lg" className="btn-gold w-full">
                  Call Now: (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;