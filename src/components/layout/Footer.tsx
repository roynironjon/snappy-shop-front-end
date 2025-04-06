
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">SnappyShop</h3>
            <p className="mb-4 text-sm opacity-80">
              We offer the best products at competitive prices with excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-coral transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-coral transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-coral transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-coral transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-coral transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-coral transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>123 Shopping Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>support@snappyshop.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm mb-4 opacity-80">
              Subscribe to receive updates on new products and special offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-coral hover:bg-coral-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/20 text-sm text-center opacity-70">
          <p>© {currentYear} SnappyShop. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-coral transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-coral transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
