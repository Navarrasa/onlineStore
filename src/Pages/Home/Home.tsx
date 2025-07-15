import { useEffect, useState } from "react";
import { getProductsAPI } from "../../services/api";

function Home(){

  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setError] = useState<string>('');
  const [skip, setSkip] = useState<number>(0);
  const limit = 12;

  useEffect(() => {

    async function fetchProducts() {
      try {
        const response = await getProductsAPI(limit, skip);
        setProdutos(response.products);
        // console.log("API response:", response.products);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError('Erro ao buscar produtos. Tente novamente mais tarde.');
        setLoading(false);
      }
    }
    setLoading(true);
    setError('');
    fetchProducts();  

  },[skip,limit])

  return( 
    <section className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center p-6"> 
        <h2 className="text-2xl font-bold">Navegue pelos itens que estão em nosso estoque!</h2>
      </div>
      {/* Container de produtos */}
      <div className="container p-4 mb-4">
        {loading && <p>Carregando produtos...</p>}
        {erro && <p>{erro}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map((produto) => (
            <div key={produto.id} className="p-4 rounded shadow">
              <h3>{produto.title}</h3>
              <img src={produto.images[0]} alt={produto.title} />
              <p className="p-2 bg-green-500 w-40 rounded-3xl text-center">Preço: R${produto.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Paginação */}
      <div className="p-6">
        <button 
          onClick={() => setSkip((prev) => Math.max(prev - limit, 0))}
          disabled={skip === 0}
          className="p-2 bg-blue-500 text-white rounded mr-2 disabled:opacity-50 cursor-pointer"
        >
          Anterior
        </button>
        <button 
          onClick={() => setSkip((prev) => prev + limit)}
          className="p-2 bg-blue-500 text-white rounded mr-2 disabled:opacity-50 cursor-pointer"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}

export default Home;