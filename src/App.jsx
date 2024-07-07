import "./App.css";
import { PersonalInfo } from "./components/PersonalInfo";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Experiencia } from "./components/Experiencia";
import { Tecnologias } from "./components/Tecnologias";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { WhatsAppBtn } from "./components/WhatsAppBtn";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header />*/}
      <PersonalInfo />
      <Proyectos />
      <Experiencia />
      <Education />
      <About />
      <Tecnologias />
      <Contact />
      <WhatsAppBtn />
      <Footer />
    </>
  );
}

export default App;
