
import ProductGrid from '../product/ProductGrid';
import { useProducts } from '@/hooks/useProducts';

const FeaturedSection = () => {
  const { featuredProducts } = useProducts();
  
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <ProductGrid title="Featured Products" products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedSection;
