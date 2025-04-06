
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    isNew,
    isSale
  } = product;

  const discount = originalPrice ? Math.round((originalPrice - price) / originalPrice * 100) : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} added to cart!`);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} added to wishlist!`);
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="product-card-hover bg-card rounded-lg overflow-hidden border border-border h-full flex flex-col">
        {/* Product Image with Badges */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-teal text-white">New</Badge>
          )}
          {isSale && (
            <Badge className="absolute top-2 right-2 bg-coral text-white">{discount}% OFF</Badge>
          )}
          
          {/* Quick Action Buttons */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity">
            <Button 
              size="icon" 
              variant="secondary" 
              className="bg-white text-teal hover:bg-teal hover:text-white rounded-full"
              onClick={handleAddToWishlist}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              variant="secondary"
              className="bg-white text-teal hover:bg-teal hover:text-white rounded-full flex items-center gap-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-xs">Add to Cart</span>
            </Button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-center mb-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-3 w-3 fill-current" 
                  fill={i < rating ? "currentColor" : "none"} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">({rating})</span>
          </div>
          
          <h3 className="font-medium text-foreground hover:text-teal transition-colors mb-1">{name}</h3>
          
          <div className="mt-auto pt-2">
            <div className="flex items-center">
              <span className="font-semibold text-foreground">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
