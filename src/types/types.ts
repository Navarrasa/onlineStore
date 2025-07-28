// types.ts (novo arquivo de tipagem)

// Tipos de dados para o sistema de e-commerce

// interface Product 
// Define a estrutura de um produto no e-commerce -> Dados retornados da API.
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Product {
  id: string | number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  tags: string[];
  reviews: Review[];
  weight: number;
  dimensions: Dimensions;
  images: string[];
  thumbnail: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
}
