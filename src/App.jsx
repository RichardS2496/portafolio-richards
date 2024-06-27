import "./App.css";
import { PersonalInfo } from "./components/PersonalInfo";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Experiencia } from "./components/Experiencia";

function App() {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Proyectos />
      <Experiencia />
    </>
  );
}

export default App;
