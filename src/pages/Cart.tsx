
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/cart/CartItem';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    cartTotal, 
    discount, 
    originalTotal 
  } = useCart();
  
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (couponCode.toLowerCase() === 'discount10') {
      toast.success('Coupon applied: 10% off');
      setCouponCode('');
    } else {
      toast.error('Invalid coupon code');
    }
  };
  
  // Calculate shipping - free over $50
  const shipping = cartTotal < 50 && cartTotal > 0 ? 5.99 : 0;
  const totalWithShipping = cartTotal + shipping;
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <h1 className="text-3xl font-heading font-bold mb-8">Shopping Cart</h1>
          
          <div className="bg-card rounded-lg shadow-sm border border-border p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-6">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-heading font-semibold mb-3">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button 
              onClick={() => navigate('/shop')} 
              className="bg-teal hover:bg-teal-light text-white"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="p-6 flex justify-between items-center border-b border-border">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2 text-teal" />
                  <span className="font-medium">{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear cart
                </Button>
              </div>
              
              <div className="divide-y divide-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="px-6">
                    <CartItem
                      item={item}
                      onRemove={removeFromCart}
                      onUpdateQuantity={updateQuantity}
                    />
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-border">
                <Button 
                  variant="outline" 
                  className="text-teal"
                  onClick={() => navigate('/shop')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-heading font-semibold mb-0">Order Summary</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-coral">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
                </div>
                
                <div className="pt-4 border-t border-border flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalWithShipping.toFixed(2)}</span>
                </div>
                
                {/* Coupon Code */}
                <form onSubmit={handleApplyCoupon} className="pt-4">
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-grow"
                    />
                    <Button type="submit" variant="outline" className="shrink-0">
                      Apply
                    </Button>
                  </div>
                </form>
                
                {/* Checkout Button */}
                <Button 
                  className="w-full bg-coral hover:bg-coral-dark text-white mt-6"
                >
                  Proceed to Checkout
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
