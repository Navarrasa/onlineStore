// ProductCard.tsx
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import type { Product } from "../../types/types";
import { useNavigate } from "react-router";

interface ProductCardProps {
  produto?: Product;
  adicionarAoCarrinho?: (produto: Product) => void;
}

export function ProductCard({ produto, adicionarAoCarrinho  }: ProductCardProps) {
  
  const navigate = useNavigate();
  
  // Evento de click no card, para navegação ao perfil do produto
  const handleCardClick = () => {
    if (produto){
      navigate(`/product/${produto.id}`);
    }
    };

  // Impede o evento de click no card e realiza o evento do botão comprar
  const handleComprarClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (adicionarAoCarrinho && produto) {
      adicionarAoCarrinho(produto);
    }
  };


  if (!produto) {
    // Skeleton placeholder enquanto carrega
    return (
      <div className="p-4 rounded shadow animate-pulse">
        <Skeleton height={30} width={`80%`} />
        <Skeleton height={320} />
        <Skeleton height={20} width={100} />
        <Skeleton height={40} width={120} />
      </div>
    );
  }

  return (
    <div
      key={produto.id}
      onClick={handleCardClick}
      className="
      p-6 rounded shadow cursor-pointer bg-gray-300 flex-wrap justify-between flex flex-col
      hover:transition hover:duration-700 hover:ease-in-out hover:bg-gray-400"
    >
      <div>
        <h3 className="font-bold mb-2">{produto.title}</h3>
        <img src={produto.images[0]} alt={produto.title}
        className="w-full h-80 object-contain mb-2 rounded" />
      </div>
      <div className="flex p-2 justify-between">
        <p className="p-2 font-bold">Preço: R${produto.price.toFixed(2)}</p>
        <button 
        onClick={handleComprarClick}
        className="
        p-2 bg-blue-600 text-white rounded cursor-pointer 
        hover:bg-blue-700 transition ease-in-out duration-300">
          Comprar
        </button>
      </div>
    </div>
  );
}
