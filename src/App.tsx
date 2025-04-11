import Layout from "./components/Layout";
import Header from "./components/Header";
import Social from "./components/Social";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

import "./index.css";

<Header></Header>;

function App() {
  return (
    <Layout>
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
