
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartProduct } from '@/types/product';
import { toast } from 'sonner';

interface CartItemProps {
  item: CartProduct;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setIsUpdating(true);
    setTimeout(() => {
      onUpdateQuantity(item.id, newQuantity);
      setIsUpdating(false);
    }, 300);
  };

  const handleRemove = () => {
    onRemove(item.id);
    toast.success(`${item.name} removed from cart`);
  };

  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-border">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 bg-muted rounded-md overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
        <Link to={`/product/${item.id}`}>
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-grow sm:ml-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/product/${item.id}`}>
              <h3 className="font-medium hover:text-teal transition-colors">
                {item.name}
              </h3>
            </Link>
            {item.variant && (
              <p className="text-sm text-muted-foreground">{item.variant}</p>
            )}
          </div>
          
          <Button 
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleRemove}
            aria-label={`Remove ${item.name} from cart`}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-border rounded-md overflow-hidden mb-3 sm:mb-0">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              disabled={isUpdating || item.quantity <= 1}
              onClick={() => handleQuantityChange(item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-10 text-center text-sm">
              {isUpdating ? '...' : item.quantity}
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              disabled={isUpdating}
              onClick={() => handleQuantityChange(item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          {/* Price */}
          <div className="text-right">
            <div className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            {item.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                ${(item.originalPrice * item.quantity).toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
