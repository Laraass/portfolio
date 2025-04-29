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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card
            title="Education"
            content="I'm studying Full-Stack Open Source Development at CHAS Academy, where I’m 
            learning both front-end and back-end technologies. From building responsive UIs to 
            developing robust APIs. I started in September 2024 and will graduate in June 2026, 
            aiming to contribute to the open-source community."
          />
          <Card
            title="Teamwork"
            content="I enjoy working with others and believe teamwork is important for success. 
            I primarily use GitHub for version control and follow good project management methods. 
            I adapt quickly to new challenges and help keep the team organized and efficient."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <Card
            title="UX/UI Design"
            content="I create intuitive and visually appealing user interfaces by blending design 
            principles with an understanding of user behavior. By sketching wireframes, building 
            prototypes, and testing with real users, I refine every detail. My goal is a smooth 
            experience and a clean, consistent design throughout."
          />
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
        </div>
      </div>
    </section>
  );
};

export default About;
