import "./App.css";
import { PersonalInfo } from "./components/PersonalInfo";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Experiencia } from "./components/Experiencia";
import { Tecnologias } from "./components/Tecnologias";
import { About } from "./components/About";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Proyectos />
      <Experiencia />
      <Education />
      <Tecnologias />
      <About />
    </>
  );
}

export default App;
