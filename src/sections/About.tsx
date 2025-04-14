import React from "react";
import Card from "../components/Card";

const About: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="max-w-7xl min-h-screen py-28 mx-auto"
      id="about-me"
    >
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-3xl font-bold text-primary">About me</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Card
            title="Title"
            content="Insert text here Insert text here Insert text here Insert text here Insert text here Insert text here Insert text here"
          />
          <Card
            title="Title"
            content="Insert text here Insert text here Insert text here Insert text here Insert text here Insert text here Insert text here"
          />
          <Card
            title="Title"
            content="Insert text here Insert text here Insert text here Insert text here Insert text here Insert text here Insert text here"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
