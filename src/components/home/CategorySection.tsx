
import { Link } from 'react-router-dom';

interface CategoryProps {
  title: string;
  image: string;
  link: string;
}

const categories: CategoryProps[] = [
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
    link: "/category/electronics"
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=80",
    link: "/category/fashion"
  },
  {
    title: "Home & Decor",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80",
    link: "/category/home-decor"
  },
  {
    title: "Beauty",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=500&q=80",
    link: "/category/beauty"
  }
];

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  return (
    <Link 
      to={category.link}
      className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.03] group"
    >
      <div className="aspect-square md:aspect-[4/5]">
        <img 
          src={category.image} 
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2">
            {category.title}
          </h3>
          <span className="inline-block text-sm text-white/80 group-hover:text-white transition-colors">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
            Shop by Category
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
