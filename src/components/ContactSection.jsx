import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0h90s4i",
        "template_r413tbq",
        form.current,
        "aIQQi0J5fJZ5dFdSR"
      )

      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className=" bg-gray-950 text-white py-20 px-6 sm:px-12"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block mb-2 font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactSection;
