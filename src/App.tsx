import Layout from "./components/Layout";
import './index.css';

function App() {
  return (
    <Layout>
    
      <section className="container bg-shade-800 min-h-screen py-28" id="home">
      <h1 className="text-6xl font-bold text-shade-100">
        Hi, I'm <span className="text-primary">Lara</span>
      </h1>

      <p className="text-3xl font-bold text-shade-100">
        I'm a <span className="text-primary">Fullstack Developer</span>
      </p>

      <p
        className="text-base font-medium text-shade-100 mt-2">
        I’m an aspiring Fullstack Developer graduating in 2026, with
        a strong foundation in both front-end and back-end development.
      </p>

      <p className="text-base font-medium text-shade-100 mt-6">
        I’m currently seeking a LIA position for the fall of 2025, where
        I can apply my skills, grow, and contribute to projects.
      </p>
      </section>

      <section className="bg-shade-700 w-full min-h-screen py-28" id="about-me">
      {/* About Me */}
      </section>

      <section className="bg-shade-800 min-h-screen py-28" id="education-projects">
      {/* Education & Projects */}
      </section>

      <section className="bg-shade-700 min-h-screen py-28 text-white" id="skills">
        {/* Skills */}
      </section>

      <section className="bg-shade-800 min-h-screen py-28" id="contact">
        {/* Contact */}
      </section>


    </Layout>
  );
}

export default App;