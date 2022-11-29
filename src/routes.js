import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />
// SPA single page application
function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
        <Route path="/" element={<Inicio/>} />
        <Route path="sobremim" element={<SobreMim/>} />
        <Route path="posts/:id" element={<Post />} />
      </Route>
      {/* 
      Na rota "/", a estrutura a ser renderizada é: 

      <PaginaPadrao>
        <Inicio />
      </PaginaPadrao> 
      
      Na rota "/sobremim", a estrutura a ser renderizada é:

      <PaginaPadrao>
        <Inicio/>
      </PaginaPadrao>
      */}

        <Route path="*" element={ <NaoEncontrada /> } />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
