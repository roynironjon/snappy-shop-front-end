
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

// Sample product data
const productsData: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 120,
    isNew: true,
    isSale: true,
    category: "electronics",
    tags: ["headphones", "wireless", "bluetooth"],
    description: "Experience superior sound quality with these comfortable wireless headphones featuring active noise cancellation and long battery life."
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 89,
    isNew: true,
    category: "electronics",
    tags: ["watch", "smart watch", "wearable"],
    description: "Stay connected with this sleek smartwatch featuring heart rate monitoring, GPS, and a vibrant OLED display."
  },
  {
    id: 3,
    name: "Premium Leather Wallet",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviews: 56,
    isSale: true,
    category: "fashion",
    tags: ["wallet", "leather", "accessories"],
    description: "Handcrafted genuine leather wallet with multiple card slots and RFID blocking technology."
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    rating: 4.0,
    reviews: 43,
    category: "fashion",
    tags: ["t-shirt", "organic", "clothing"],
    description: "Soft and comfortable 100% organic cotton t-shirt, perfect for everyday wear."
  },
  {
    id: 5,
    name: "Professional Chef Knife",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 74,
    category: "home-decor",
    tags: ["kitchen", "knives", "cooking"],
    description: "High-carbon stainless steel chef knife with ergonomic handle for precise cutting and slicing."
  },
  {
    id: 6,
    name: "Scented Soy Candle Set",
    price: 34.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1603006905393-c8bfd67711c0?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviews: 38,
    isSale: true,
    category: "home-decor",
    tags: ["candles", "home", "decor"],
    description: "Set of three hand-poured soy candles with essential oil fragrances to create a relaxing atmosphere."
  },
  {
    id: 7,
    name: "Natural Face Serum",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70e758?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 62,
    isNew: true,
    category: "beauty",
    tags: ["skincare", "serum", "natural"],
    description: "Vitamin C and hyaluronic acid serum to brighten skin and reduce fine lines."
  },
  {
    id: 8,
    name: "Organic Hair Oil Treatment",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1619346081977-6e94c5338409?auto=format&fit=crop&w=800&q=80",
    rating: 4.1,
    reviews: 29,
    isSale: true,
    category: "beauty",
    tags: ["hair care", "organic", "beauty"],
    description: "Nourishing organic oil blend that repairs damaged hair and promotes growth."
  },
  {
    id: 9,
    name: "Ergonomic Office Chair",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 82,
    isSale: true,
    category: "furniture",
    tags: ["office", "chair", "ergonomic"],
    description: "Adjustable ergonomic office chair with lumbar support and breathable mesh back."
  },
  {
    id: 10,
    name: "Ceramic Plant Pot Set",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 47,
    isNew: true,
    category: "home-decor",
    tags: ["plant", "ceramic", "pot", "decor"],
    description: "Set of three minimalist ceramic pots in varied sizes, perfect for indoor plants."
  }
];

export function useProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 300));
        setProducts(productsData);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const featuredProducts = products.filter(p => p.isNew || p.isSale).slice(0, 8);
  
  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };
  
  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };
  
  const getSaleProducts = () => {
    return products.filter(product => product.isSale);
  };

  return {
    products,
    featuredProducts,
    isLoading,
    getProductById,
    getProductsByCategory,
    getSaleProducts
  };
}
