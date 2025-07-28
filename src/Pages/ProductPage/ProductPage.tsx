import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getProductAPI } from "../../services/api";
import type { Product } from "../../types/types";
import leftArr from '/leftArr.png'

function ProductPage(){
    const { id } = useParams();
    const [produto, setProduto] = useState<Product>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Buscar os dados do produto pela API
    useEffect(() => {
    if (!id) return; // Segurança: se não houver id, não tenta buscar

    async function fetchProduct() {
      try {
        const data = await getProductAPI(Number(id));
        setProduto(data);
        setLoading(false);
      } catch (e) {
        setError("Erro ao buscar produto.");
        setLoading(false);
      }
    }

        fetchProduct();
    }, [id]);
    
    if (loading) return <div className="p-8 text-4xl w-full h-dvh flex items-center justify-center">Carregando...</div>;
    if (error || !produto) return <div className="p-8 text-red-600 text-4xl w-full h-dvh flex items-center justify-center">{error}</div>;

    const finalPrice = (produto.price * (1 - produto.discountPercentage / 100)).toFixed(2);


    return(

    <section className="flex flex-col lg:flex-row gap-10 p-8 font-sans">
        {/* Esquerda: Imagem */}
        <div className="w-full lg:w-1/2 flex flex-col items-center ">
            <div className="flex flex-row w-96 justify-start items-center mb-2">
              <Link to="/" className="flex items-center hover:bg-gray-400 duration-500 ease-in-out transition rounded-2xl p-2 cursor-pointer">
                <img src={leftArr} alt="Left Arrow" className="w-12 h-12" />
                <p>Voltar</p>
              </Link>
            </div>
            <img src={produto.images[0]} alt={produto.title} className="w-full max-w-md border-gray-300 rounded-2xl border-2" />
        </div>

        {/* Direita: Detalhes */}
        <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-2 mt-4">
                {produto.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-600 text-white text-xs font-medium p-2 rounded-full"
                        >
                        #{tag}
                    </span>
                ))}
            </div>
            <h1 className="text-3xl font-bold mt-1">{produto.title}</h1>
            <p className="text-sm text-gray-600 mt-1">by {produto.brand}</p>
            <div className="flex items-center gap-4 mt-4">
                <span className="text-2xl font-bold text-gray-800">${finalPrice}</span>
                <span className="line-through text-gray-500">${produto.price}</span>
                <span className="text-red-500 font-semibold text-sm">
                    {produto.discountPercentage.toFixed(0)}% off
                </span>
            </div>

        <div className="mt-6 text-sm text-gray-700 leading-relaxed">{produto.description}</div>

        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p><strong>Stock:</strong> {produto.stock} units</p>
          <p><strong>Warranty:</strong> {produto.warrantyInformation}</p>
          <p><strong>Shipping:</strong> {produto.shippingInformation}</p>
          <p><strong>Availability:</strong> {produto.availabilityStatus}</p>
        </div>

        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          Add to Cart
        </button>

        {/* Avaliações */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Reviews & Ratings</h2>
          <div className="space-y-4">
            {produto.reviews.slice(0, 3).map((review, idx) => (
              <div key={idx} className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{review.reviewerName}</h3>
                  <span className="text-yellow-500">⭐ {review.rating}</span>
                </div>
                <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                <p className="text-sm mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
}

export default ProductPage;
