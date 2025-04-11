import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import EducationProjects from "./sections/EducationProjects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

<Header />;

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

// Footer

export default App;
