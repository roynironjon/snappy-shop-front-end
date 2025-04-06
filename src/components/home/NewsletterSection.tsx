
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter your email');
    }
  };
  
  return (
    <section className="bg-teal text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6 opacity-80">
            Get the latest updates on new products, sales, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-grow"
            />
            <Button type="submit" className="bg-coral hover:bg-coral-dark text-white whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm opacity-60">
            By subscribing you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
