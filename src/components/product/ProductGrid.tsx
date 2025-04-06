
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewMore, setViewMore] = useState(false);
  
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const displayedProducts = viewMore ? sortedProducts : sortedProducts.slice(0, 8);

  return (
    <div>
      {title && (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-0">
            {title}
          </h2>
          
          <div className="flex items-center">
            <span className="text-sm mr-2 text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length > 8 && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-teal text-teal hover:bg-teal hover:text-white"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "Show Less" : "View More Products"}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${viewMore ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
