// ProductCard.tsx
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import type { Product } from "../../types/types";

interface ProductCardProps {
  produto?: Product; // pode ser undefined para loading
}

export function ProductCard({ produto }: ProductCardProps) {
  if (!produto) {
    // Skeleton placeholder enquanto carrega
    return (
      <div className="p-4 rounded shadow animate-pulse">
        <Skeleton height={30} width={`80%`} />
        <Skeleton height={150} />
        <Skeleton height={20} width={100} />
        <Skeleton height={40} width={120} />
      </div>
    );
  }

  return (
    <div 
      key={produto.id} 
      className="
      p-6 rounded shadow cursor-pointer bg-gray-300 flex-wrap justify-between flex flex-col
      hover:transition hover:duration-700 hover:ease-in-out hover:bg-gray-500"
    >
      <h3 className="font-bold mb-2">{produto.title}</h3>
      <img src={produto.images[0]} alt={produto.title} 
      className="w-full h-80 object-contain mb-2 rounded" />
      <div className="flex p-2 justify-between">
        <p className="p-2 font-bold">Preço: R${produto.price.toFixed(2)}</p>
        <button className="
        p-2 bg-blue-600 text-white rounded cursor-pointer 
        hover:bg-blue-700 transition ease-in-out duration-300" onClick={() => alert(`Adicionado ${produto.title} ao carrinho!`)}>
          Comprar
        </button>
      </div>
    </div>
  );
}
