
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/product/ProductGrid';
import { useProducts } from '@/hooks/useProducts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const { products, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 200]);
  
  const categories = ["electronics", "fashion", "home-decor", "beauty"];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Filter products when selections change
  const applyFilters = () => {
    let filtered = [...products];
    
    // Filter by category if any selected
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(filtered);
  };
  
  // Handle category checkbox changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Apply filters when dependencies change
  useState(() => {
    applyFilters();
  }, [products, selectedCategories, priceRange]);
  
  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <Layout>
      <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">All Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg shadow-sm border border-border p-6">
              <h2 className="text-lg font-heading font-semibold mb-4">Filters</h2>

              <Accordion type="single" collapsible className="w-full">
                {/* Categories */}
                <AccordionItem value="categories">
                  <AccordionTrigger className="text-base font-medium">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-1">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <label
                            htmlFor={category}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {formatCategory(category)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Price Range */}
                <AccordionItem value="price">
                  <AccordionTrigger className="text-base font-medium">
                    Price Range
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <Slider
                        defaultValue={[0, 200]}
                        max={200}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between">
                        <div className="w-20">
                          <Input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([
                              Number(e.target.value), 
                              priceRange[1]
                            ])}
                            className="h-8 text-sm"
                          />
                        </div>
                        <span>to</span>
                        <div className="w-20">
                          <Input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([
                              priceRange[0], 
                              Number(e.target.value)
                            ])}
                            className="h-8 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6">
                <Button 
                  onClick={applyFilters} 
                  className="w-full bg-coral hover:bg-coral-dark text-white"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="text-center py-12">Loading products...</div>
            ) : (
              <ProductGrid products={filteredProducts.length > 0 ? filteredProducts : products} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
