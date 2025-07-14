import { useState } from "react";
import { getProductsAPI } from "../../services/api";

function Home(){

  const [produtos, setProdutos] = useState([]);

  const getProducts = async () =>{
    
    const products = await getProductsAPI()
    setProdutos(products) 

  }

  return( 
    <section>
      <div> 
        <h2>Navegue pelos itens que estão em nosso estoque!</h2>
      </div>

      {/* Container de produtos */}
      <div>
        {produtos.map()}
      </div>
    </section>
  );
}

export default Home;