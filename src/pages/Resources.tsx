import { BookOpen, TrendingUp, Users, Target, Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  const featuredArticle = {
    title: "The Ultimate Guide to Scaling Your Roofing Business in 2024",
    excerpt: "Learn the proven strategies that successful roofing contractors use to break through growth barriers and build 8-figure businesses.",
    readTime: "12 min read",
    category: "Business Growth",
    date: "March 15, 2024",
    featured: true
  };

  const articles = [
    {
      title: "How to Build a Premium Roofing Brand That Commands Higher Prices",
      excerpt: "Discover the branding secrets that separate commodity contractors from premium service providers in the roofing industry.",
      readTime: "8 min read", 
      category: "Branding & Marketing",
      date: "March 10, 2024",
      tags: ["Branding", "Pricing Strategy"]
    },
    {
      title: "The 5 Systems Every Million-Dollar Roofing Company Must Have",
      excerpt: "Essential operational systems that enable roofing businesses to scale efficiently while maintaining quality and profitability.",
      readTime: "10 min read",
      category: "Operations",
      date: "March 5, 2024", 
      tags: ["Systems", "Operations"]
    },
    {
      title: "Recruiting Top Roofing Talent: A Complete Hiring Framework",
      excerpt: "Step-by-step guide to attracting, interviewing, and retaining high-performing crew members and managers.",
      readTime: "15 min read",
      category: "Team Building", 
      date: "February 28, 2024",
      tags: ["Hiring", "HR", "Team Building"]
    },
    {
      title: "Digital Marketing Strategies That Actually Work for Roofers",
      excerpt: "Proven digital marketing tactics specifically designed for roofing contractors to generate quality leads consistently.",
      readTime: "12 min read",
      category: "Marketing",
      date: "February 22, 2024",
      tags: ["Digital Marketing", "Lead Generation"]
    },
    {
      title: "Financial Management Best Practices for Roofing Businesses",
      excerpt: "Essential financial controls, metrics, and strategies to maximize profitability and build sustainable cash flow.",
      readTime: "9 min read",
      category: "Finance",
      date: "February 15, 2024",
      tags: ["Finance", "Profitability"]
    },
    {
      title: "Preparing Your Roofing Company for a Successful Exit",
      excerpt: "Strategic planning considerations and value enhancement tactics for roofing business owners planning their exit.",
      readTime: "11 min read",
      category: "Exit Planning",
      date: "February 8, 2024",
      tags: ["Exit Strategy", "Business Valuation"]
    }
  ];

  const categories = [
    { name: "Business Growth", count: 8, icon: TrendingUp },
    { name: "Operations", count: 12, icon: Target },
    { name: "Team Building", count: 6, icon: Users },
    { name: "Marketing", count: 10, icon: BookOpen }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-6">
              Business <span className="text-gradient-gold">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert insights, proven strategies, and actionable advice to help you build a more profitable and scalable roofing business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-elegant p-12 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Featured Article
              </span>
              <span className="text-sm text-muted-foreground">{featuredArticle.category}</span>
            </div>
            
            <h2 className="heading-serif text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
              {featuredArticle.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              
              <Button className="btn-gold">
                Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold mb-4">
              Browse by <span className="text-gradient-gold">Category</span>
            </h2>
            <p className="text-muted-foreground">Find the insights you need to grow your roofing business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card-elegant p-6 text-center hover:shadow-gold transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <category.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold mb-4">
              Latest <span className="text-gradient-gold">Insights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="card-elegant p-6 hover:shadow-gold transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="heading-serif text-xl font-bold mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="btn-outline-gold">
              Load More Articles <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="card-elegant p-12 text-center max-w-2xl mx-auto">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="heading-serif text-3xl font-bold mb-4">
              Stay Ahead of the <span className="text-gradient-gold">Competition</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get exclusive business insights and growth strategies delivered to your inbox monthly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="btn-gold px-8">Subscribe</Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. Join 1,500+ roofing business owners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;