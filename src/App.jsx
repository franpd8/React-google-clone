import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {

  const navBar1 ={
    item1:"Sobre Google",
    item2:"Tienda"
  }
  const navBar2 ={
    item1:"Gmail",
    item2:"Imágenes",
    item3:"Iniciar Sesión"
  }
  const navBar ={
    navBar1, navBar2
  }
  const buttons={
    button1:"Buscar con Google",
    button2:"Voy a tener suerte"
  }
  const languages={
    language1:"català",
    language2:"galego",
    language3:"euskera"
  }
  const search ={
    buttons,languages
  }
  const links={
    link1:"Publicidad",
    link2:"Empresa",
    link3:"Cómo funciona la búsqueda",
    link4:"Emisión neutra de carbono desde el 2007",
    link5:"Privacidad",
    link6:"Términos",
    link7:"Configuración"

  }
  return (
    <div>
     <Navbar items={navBar}/>
     <Search items={search}/>
     <Footer items={links}/>
    </div>
  );
}

export default App;
