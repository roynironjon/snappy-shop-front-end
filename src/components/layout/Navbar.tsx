
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-heading font-bold text-teal">
              Snappy<span className="text-coral">Shop</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-teal transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-foreground hover:text-teal transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-foreground hover:text-teal transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-foreground hover:text-teal transition-colors">
              About
            </Link>
          </nav>

          {/* Search, User, Wishlist, and Cart - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-full max-w-xs">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon" aria-label="User account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Link to="/cart">
                <Button variant="ghost" size="icon" aria-label="Shopping cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 bg-coral hover:bg-coral-dark text-white w-5 h-5 flex items-center justify-center p-0 rounded-full text-xs">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
          <div className="container px-4 pt-2 pb-4 space-y-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-foreground hover:text-teal py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/shop" className="text-foreground hover:text-teal py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/categories" className="text-foreground hover:text-teal py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Categories
              </Link>
              <Link to="/about" className="text-foreground hover:text-teal py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </nav>

            <div className="flex justify-between pt-3 border-t border-border">
              <Button variant="ghost" size="icon" aria-label="User account">
                <User className="h-5 w-5" />
                <span className="ml-2">Account</span>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
                <span className="ml-2">Wishlist</span>
              </Button>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="icon" aria-label="Shopping cart">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="ml-2">Cart</span>
                  {cartCount > 0 && (
                    <Badge className="ml-1 bg-coral hover:bg-coral-dark text-white text-xs">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
