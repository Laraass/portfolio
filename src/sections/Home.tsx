import React from "react";
import Social from "../components/Social";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <section
      className="flex flex-col gap-4 items-center justify-center min-h-screen max-w-3xl py-22 mx-auto"
      id="home"
    >
      <div className="flex flex-col sm:flex-row gap-9 items-center">
        {/* Image */}
        <img
          src="/me.png"
          alt="Me"
          className="w-64 md:w-90 rounded-md border-2 border-primary 
        transition-all duration-300
        hover:shadow-[0_0_20px_5px_#836AED]"
        />

        {/* Text content */}
        <div className="flex flex-col gap-3">
          <div className="gap-2">
            <h1 className="text-5xl font-bold text-shade-100">
              Hi I'm <span className="text-primary">Lara,</span>
            </h1>

            <div className="flex flex-row items-center">
              <p className="text-3xl font-bold text-shade-100">
                A{" "}
                <span className="text-primary animate-typewriter">
                  <TypeAnimation
                    sequence={[
                      "Fullstack Developer",
                      1000,
                      "Frontend Developer",
                      1000,
                      "Backend Developer",
                      1000,
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
            I’m an aspiring Fullstack Developer graduating in 2026, with a
            strong foundation in both frontend and backend development.
          </p>

          <p className="text-base font-medium text-shade-100">
            I’m currently seeking a LIA internship between November 2025 and
            April 2026, where I can apply my skills, evolve and contribute to
            projects!
          </p>

          <div className="flex flex-row gap-4">
            <Social
              link="https://www.linkedin.com/in/lara-salman-00224b1b2/"
              ariaLabel="LinkedIn profile"
            >
              <Icon icon="ri:linkedin-fill" className="size-6" />
            </Social>

            <Social
              link="https://github.com/Laraass"
              ariaLabel="GitHub profile"
            >
              <Icon icon="mdi:github" className="size-6" />
            </Social>

            <Social link="/cv_sv_eng.pdf" ariaLabel="My CV (Opens in new tab)">
              <Icon icon="tabler:file-cv-filled" className="size-6" />
            </Social>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
