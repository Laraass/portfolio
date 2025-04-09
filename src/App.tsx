import Layout from "./components/Layout";
import Header from "./components/Header";
import { TypeAnimation } from "react-type-animation";

import "./index.css";

<Header></Header>;

function App() {
  return (
    <Layout>
      <section
        className="flex flex-col gap-2 bg-shade-800 min-h-screen py-28"
        id="home"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl font-bold text-shade-100">
            Hi I'm <span className="text-primary">Lara,</span>
          </h1>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-3xl font-bold text-shade-100">
              A{" "}
              <span className="text-primary animate-typewriter">
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer", 1000,
                    "Frontend Developer", 1000,
                    "Backend Developer", 1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </span>
            </p>
          </div>
        </div>

        <p className="text-base font-medium text-shade-100">
          I’m an aspiring Fullstack Developer graduating in 2026, with a strong
          foundation in both front-end and back-end development.
        </p>

        <p className="text-base font-medium text-shade-100">
          I’m currently seeking a LIA internship between November 2025 and April
          2026, where I can apply my skills, evolve and contribute to projects!
        </p>
      </section>

      <section className="bg-shade-700 w-full min-h-screen py-28" id="about-me">
        {/* About Me */}
      </section>

      <section
        className="bg-shade-800 min-h-screen py-28"
        id="education-projects"
      >
        {/* Education & Projects */}
      </section>

      <section
        className="bg-shade-700 min-h-screen py-28 text-white"
        id="skills"
      >
        {/* Skills */}
      </section>

      <section className="bg-shade-800 min-h-screen py-28" id="contact">
        {/* Contact */}
      </section>
    </Layout>
  );
}

export default App;
