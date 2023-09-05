import Nav from "./Componentes/NavBar/Nav";
import './App.css'
import Main from "./Componentes/Main/Main";
import About from "./Componentes/About/About";
import 'boxicons'
import Education from "./Componentes/Education/Education";
import Projects from "./Componentes/Proyects/Proyects";
import Footer from "./Componentes/Footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
