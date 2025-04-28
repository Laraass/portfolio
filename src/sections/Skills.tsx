import React from "react";
import Skill from "../components/Skill";
import SkillCard from "../components/SkillCard";

const Skills: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="max-w-7xl min-h-screen py-28 mx-auto"
      id="skills"
    >
      <div className="flex flex-col gap-6">
        <SkillCard title="Front-end">
          <Skill
            skillIcon="devicon:css3"
            size="size-18"
            ariaLabel="CSS"
            label="CSS"
          />
          <Skill
            skillIcon="logos:tailwindcss-icon"
            ariaLabel="Tailwind CSS"
            label="Tailwind CSS"
          />
          <Skill
            skillIcon="akar-icons:sass-fill"
            ariaLabel="Sass"
            label="Sass"
            color="#CC6699"
          />
          <Skill skillIcon="devicon:react" ariaLabel="React" label="React" />
          <Skill
            skillIcon="devicon:angularjs"
            ariaLabel="Angular"
            label="Angular"
          />
        </SkillCard>

        <SkillCard title="Back-end">
          <Skill
            skillIcon="vscode-icons:file-type-html"
            ariaLabel="HTML"
            label="HTML"
          />

          <Skill
            skillIcon="arcticons:sqlite-editor"
            ariaLabel="SQL"
            label="SQL"
            color="#0D99FF"
          />
          <Skill skillIcon="logos:php" ariaLabel="PHP" label="PHP" />
          <Skill
            skillIcon="devicon:laravel"
            ariaLabel="Laravel"
            label="Laravel"
          />
          <Skill
            skillIcon="material-icon-theme:javascript"
            ariaLabel="JavaScript"
            label="JavaScript"
          />
          <Skill
            skillIcon="logos:typescript-icon-round"
            ariaLabel="TypeScript"
            label="TypeScript"
          />
          <Skill
            skillIcon="vscode-icons:file-type-node"
            ariaLabel="Node"
            label="Node"
          />
          <Skill
            skillIcon="devicon:mongodb"
            ariaLabel="Mongo DB"
            label="Mongo DB"
          />
        </SkillCard>

        <SkillCard title="Tools">
          <Skill
            skillIcon="material-icon-theme:figma"
            ariaLabel="Figma"
            label="Figma"
            size="size-18"
          />

          <Skill
            skillIcon="devicon:vscode"
            ariaLabel="VS Code"
            label="VS Code"
            size="size-18"
          />

          <Skill skillIcon="mdi:github" ariaLabel="GitHub" label="GitHub" />
          <Skill skillIcon="devicon:gitlab" ariaLabel="GitLab" label="GitLab" />

          <Skill
            skillIcon="logos:docker-icon"
            ariaLabel="Docker"
            label="Docker"
          />

          <Skill
            skillIcon="simple-icons:adminer"
            ariaLabel="Adminer"
            label="Adminer"
          />
          <Skill
            skillIcon="devicon:insomnia"
            ariaLabel="Insomnia"
            label="Insomnia"
          />
        </SkillCard>
      </div>
    </section>
  );
};

export default Skills;
