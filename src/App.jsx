import Navbar from "./components/Navbar/Navbar";

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
  return (
    <div>
     <Navbar items={navBar}/>
    </div>
  );
}

export default App;
