import React, { useState } from "react";
import InputField from "../components/Inputfield";
import Button from "../components/Button";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      data-aos="fade-up"
      className="max-w-7xl min-h-screen py-28 mx-auto flex justify-center items-center"
      id="contact"
    >
      <form
        action="https://formspree.io/f/mnndjzqv"
        method="POST"
        className="flex flex-col gap-6 w-full max-w-lg items-center"
      >
        <h2 className="text-3xl font-bold text-primary">Contact me</h2>

        <InputField
          name="name"
          label="Full name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          name="email"
          label="E-mail"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          name="phone"
          label="Phone number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <InputField
          name="message"
          label="Message"
          placeholder="Write your message..."
          type="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button text="Submit" onClick={() => alert("Message sent!")} />
      </form>
    </section>
  );
};

export default Contact;
