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
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <Card
            title="Front-end"
            content="I build interactive, user-friendly and responsive websites with a
            focus on writing clean and maintainable code to enhance functionality and aesthetics. 
            My approach ensures that websites are not only functional but also enjoyable to use."
          />
          <Card
            title="Back-end"
            content="I build secure and robust backend systems, focusing on efficient APIs and 
            database optimization. I handle authentication, data management, and ensure efficiency 
            and security through clean, maintainable code and best practices."
          />
          <Card
            title="Teamwork"
            content="I enjoy working with others and believe teamwork is important for success. 
            I primarily use GitHub for version control and follow good project management methods. 
            I adapt quickly to new challenges and help keep the team organized and efficient."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
