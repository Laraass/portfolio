import Layout from "./components/Layout";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
