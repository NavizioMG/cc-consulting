import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="heading-serif text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="heading-serif text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to building your roofing empire.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gold">
              <Link to="/">
                <Home className="h-5 w-5 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline-gold">
              <Link to="/contact">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Get Help
              </Link>
            </Button>
          </div>

          <div className="mt-12 p-6 card-elegant max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              Need assistance? Contact our team at{" "}
              <a href="mailto:consulting@castlecrest.com" className="text-primary hover:underline">
                consulting@castlecrest.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
