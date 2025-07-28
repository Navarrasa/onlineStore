import { Routes, Route } from "react-router";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import DefaultLayout from "../layout/DefaultLayout";
import ProductPage from "../Pages/ProductPage/ProductPage";

function WebRouter() {
  return(

    <Routes>
      <Route element={<DefaultLayout/>}>
        {/* Elementos com o Layour Padrão */}
        <Route path="/home" element={ <Home/> }/>
        <Route path="/product/:id" element={ <ProductPage/> }/>

      </Route>
        {/* Elementos sem o Layout Padrão */}
        <Route path="/" element={ <Login/> }/>

    </Routes>
  
  );
}

export default WebRouter;