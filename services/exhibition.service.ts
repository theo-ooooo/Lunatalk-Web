import type { ApiResponse } from "~/types/api";
import type { Category } from "./category.service";

export interface Exhibition {
  exhibitionId: number;
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  products: { product: Product }[];
}

export interface Product {
  productId: number;
  productName: string;
  price: number;
  visibility: string;
  colors: string[];
  category: Category;
  images: ProductImage[];
}

export interface ProductImage {
  referenceId: number;
  imagePath: string;
  imageFileExtension: string;
  imageType: string;
}

export const exhibitionService = {
  getExhibitions: async () => {
    const { $api } = useNuxtApp();
    return await $api<ApiResponse<Exhibition[]>>("/exhibitions");
  },
};
