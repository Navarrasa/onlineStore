import { Routes, Route } from "react-router";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import DefaultLayout from "../layout/DefaultLayout";

function WebRouter() {
  return(

    <Routes>
      <Route element={<DefaultLayout/>}>
        {/* Elementos com o Layour Padrão */}
        <Route path="/home" element={ <Home/> }/>
      
      </Route>
        {/* Elementos sem o Layout Padrão */}
        <Route path="/" element={ <Login/> }/>

    </Routes>
  
  );
}

export default WebRouter;