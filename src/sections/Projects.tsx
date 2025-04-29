import React from "react";
import Card from "../components/Card";

const Projects: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="max-w-7xl min-h-screen py-28 mx-auto"
      id="projects"
    >
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-3xl font-bold text-primary">Projects</h2>

        <div className="grid lg:grid-cols-3 gap-6 w-full">
          <Card title="To be announced" content="Project in progress"></Card>
          <Card title="To be announced" content="Project in progress"></Card>
          <Card title="To be announced" content="Project in progress"></Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
