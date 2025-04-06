
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  ShieldCheck, 
  ArrowLeft, 
  Star, 
  Heart, 
  Minus, 
  Plus, 
  ShoppingCart
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Find product by ID
  const product = getProductById(parseInt(id || '0'));
  
  // Generate multiple images for display (normally this would come from the API)
  const productImages = product ? [
    product.image,
    'https://images.unsplash.com/photo-1582582474503-c27eecf3d83e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&w=800&q=80',
  ] : [];
  
  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Add to cart handler
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button onClick={() => navigate('/shop')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm text-muted-foreground">
          <button onClick={() => navigate('/')}>Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/shop')}>Shop</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate(`/category/${product.category}`)}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </button>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-muted rounded-lg overflow-hidden aspect-square">
              <img
                src={productImages[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            {productImages.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                      index === activeImage ? 'border-teal' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - image ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.isNew && (
                <Badge className="bg-teal text-white">New</Badge>
              )}
              {product.isSale && (
                <Badge className="bg-coral text-white">
                  Sale
                </Badge>
              )}
              <Badge variant="outline" className="border-muted-foreground">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-heading font-bold">{product.name}</h1>
            
            <div className="flex items-center mt-3 mb-6">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    fill={i < product.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="text-3xl font-semibold">
                ${product.price.toFixed(2)}
              </div>
              {product.originalPrice && (
                <div className="ml-3 text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </div>
              )}
              {product.originalPrice && (
                <Badge className="ml-3 bg-coral text-white">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>
            
            <p className="text-muted-foreground mb-8">
              {product.description}
            </p>
            
            {/* Product Actions */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-input rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 text-center">{quantity}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Add to Cart Button */}
                <Button
                  className="bg-teal hover:bg-teal-light text-white flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                {/* Wishlist Button */}
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="border-t border-border pt-6">
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Truck className="h-5 w-5 mr-3 text-teal" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center text-sm">
                  <ShieldCheck className="h-5 w-5 mr-3 text-teal" />
                  <span>2-year warranty and 30-day money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="pt-6">
              <div className="grid gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border-b pb-2">
                    <p className="font-medium">Category</p>
                    <p className="text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium">Weight</p>
                    <p className="text-muted-foreground">0.5 kg</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium">Dimensions</p>
                    <p className="text-muted-foreground">10 × 10 × 10 cm</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium">Material</p>
                    <p className="text-muted-foreground">Plastic, Metal</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium">Color</p>
                    <p className="text-muted-foreground">Black, White</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium">Warranty</p>
                    <p className="text-muted-foreground">2 Years</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                {/* Sample reviews */}
                {[1, 2, 3].map((reviewId) => (
                  <div key={reviewId} className="border-b border-border pb-6 last:border-b-0">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="font-medium mr-2">John Doe</div>
                        <div className="text-sm text-muted-foreground">
                          2 months ago
                        </div>
                      </div>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current"
                            fill={i < 4 ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                    <p>
                      Great product! Exactly as described and arrived quickly. 
                      Would definitely purchase again.
                    </p>
                  </div>
                ))}
                
                <Button className="mt-4 bg-teal hover:bg-teal-light text-white">
                  Write a Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
