import React from "react";
import { Icon } from "@iconify/react";
import Social from "./Social";

const Footer: React.FC = () => {
  const linkClasses =
    "text-shade-100 hover:text-primary active:text-primary cursor-pointer transition duration-300";

  return (
    <footer className="flex w-full flex-col items-center gap-6 bg-shade-900 p-6">
      {/* Footer nav links */}
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center flex-wrap gap-4">
          <button
            onClick={() => (window.location.href = "#home")}
            className={linkClasses}
          >
            Home
          </button>
          <button
            onClick={() => (window.location.href = "#about-me")}
            className={linkClasses}
          >
            About me
          </button>
          <button
            onClick={() => (window.location.href = "#projects")}
            className={linkClasses}
          >
            Projects
          </button>
          <button
            onClick={() => (window.location.href = "#skills")}
            className={linkClasses}
          >
            Skills
          </button>
          <button
            onClick={() => (window.location.href = "#contact")}
            className={linkClasses}
          >
            Contact
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <Social
            link="https://www.linkedin.com/in/lara-salman-00224b1b2/"
            ariaLabel="LinkedIn profile"
          >
            <Icon icon="ri:linkedin-fill" className="size-6" />
          </Social>

          <Social link="https://github.com/Laraass" ariaLabel="GitHub profile">
            <Icon icon="mdi:github" className="size-6" />
          </Social>

          <Social link="/cv_sv_eng.pdf" ariaLabel="My CV (Opens in new tab)">
            <Icon icon="tabler:file-cv-filled" className="size-6" />
          </Social>
        </div>
      </div>

      <p className="flex w-full justify-center text-xs text-shade-200 mt-4">
        © Lara Salman
      </p>
    </footer>
  );
};

export default Footer;
