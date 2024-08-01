import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = ({ contactRefs }: any) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_3ptyytt";
  const templateId = "template_9yg5nem";
  const publicKey = "sCygaYYZsrZBE4m9F";

  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      name: "Hiring",
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);

        setMessage("");
        setEmail("");
      },
      (error) => {
        console.log("FAILED...", error);
        setMessage("");
        setEmail("");
      }
    );
  };

  return (
    <div
      ref={contactRefs}
      className="h-[65vh] bg-slate-700 flex flex-col items-center w-full"
    >
      <div className="sm:w-[60%] w-[90%] text-center p-6">
        <h1 className="text-[32px] font-bold text-white">Contact Me</h1>
        <h1 className="text-gray-200">
          Please contact me directly at{" "}
          <a href="mailto:saketsingh00078@gmail.com" className="underline">
            saketsingh00078@gmail.com
          </a>{" "}
          or through this form.
        </h1>
        <form onSubmit={sendEmail} className="flex flex-col items-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 text-lg rounded-lg w-[80%] my-4 focus:outline-none"
            type="email"
            placeholder="Your Email"
            value={email}
            required
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 text-lg rounded-lg w-[80%] h-[25vh] focus:outline-none mb-4"
            placeholder="Your message"
            value={message}
            required
          />
          <button className="text-left px-4 py-2 bg-slate-600 rounded-full text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
