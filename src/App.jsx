import "./App.css";
import { PersonalInfo } from "./components/PersonalInfo";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Experiencia } from "./components/Experiencia";
import { Tecnologias } from "./components/Tecnologias";

function App() {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Proyectos />
      <Experiencia />
      <Tecnologias/>
    </>
  );
}

export default App;
