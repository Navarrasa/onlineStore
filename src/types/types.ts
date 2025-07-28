// types.ts (novo arquivo de tipagem)

// Tipos de dados para o sistema de e-commerce

// interface Product 
// Define a estrutura de um produto no e-commerce -> Dados retornados da API.
export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}
