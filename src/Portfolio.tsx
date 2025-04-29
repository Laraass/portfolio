import Layout from "./components/Layout";
import Home from "./sections/Home";
import About from "./sections/About";
import EducationProjects from "./sections/EducationProjects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <EducationProjects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
