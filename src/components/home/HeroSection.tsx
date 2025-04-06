
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-beige overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center py-16 md:py-24 lg:py-32 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold max-w-3xl mb-4">
            Discover Your Perfect Style
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90">
            Shop the latest trends with free shipping worldwide. Quality products at affordable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-coral hover:bg-coral-dark text-white font-medium px-8"
            >
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-teal"
            >
              <Link to="/categories">
                Browse Categories
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
