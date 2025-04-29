import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import InputField from "../components/Inputfield";
import Button from "../components/Button";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mnndjzqv");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <p className="text-primary text-xl font-semibold">
          Message sent. I'll get back to you soon!
        </p>
      </section>
    );
  }

  return (
    <section
      data-aos="fade-up"
      className="max-w-7xl min-h-screen py-28 mx-auto flex justify-center items-center"
      id="contact"
    >
      <form
        onSubmit={handleSubmit}
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />

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
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button text="Submit" type="submit" />
      </form>
    </section>
  );
};

export default Contact;
