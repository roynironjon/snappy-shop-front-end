
import { ArrowRight, Truck, Shield, RotateCcw, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PromoSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free worldwide shipping on orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment methods"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30 days money back guarantee"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated customer support"
    }
  ];

  return (
    <section className="bg-beige">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 mx-auto">
        {/* Promo Banner */}
        <div className="relative mb-16 overflow-hidden rounded-lg bg-teal text-white shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Summer Sale Up To 50% Off
              </h2>
              <p className="mb-6 text-white/80">
                Don't miss our biggest sale of the season. Limited time offers on selected items.
              </p>
              <div>
                <Button 
                  asChild
                  className="bg-coral hover:bg-coral-dark text-white"
                >
                  <Link to="/sale">
                    Shop Sale <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80" 
                alt="Summer Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-12 h-12 bg-teal rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
