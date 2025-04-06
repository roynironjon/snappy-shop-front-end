
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description?: string;
  image: string;
  images?: string[];
  rating: number;
  reviews?: number;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
  tags?: string[];
  stock?: number;
}

export interface CartProduct extends Product {
  quantity: number;
  variant?: string;
}
