export interface Product {
  productId: number;
  productName: string;
  price: number | null;
  colors?: string[];
  thumbnailImage?: {
    imagePath: string;
  };
  category?: {
    categoryId: number;
    categoryName: string;
  };
}

export interface Exhibition {
  exhibitionId: number;
  title: string;
  products: { product: Product }[];
}
