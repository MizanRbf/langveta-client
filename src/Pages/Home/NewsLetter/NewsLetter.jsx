import Swal from "sweetalert2";
import { motion } from "motion/react";
import Form from "./Form";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const NewsLetter = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1tl7k8c",
        "template_88eueta",
        form.current,
        "eE11Jr1RKLDjHi_0W"
      )
      .then(
        () => {
          Swal.fire({
            title: "Subscribed Successfully!",
            icon: "success",
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Error: " + error.text);
        }
      );
  };

  return (
    <Section>
      <div
        id="contact"
        className="border rounded-lg border-slate-200 shadow-lg p-6 gap-6 flex items-center bg-[#75582263] flex-col md:flex-row scroll-mt-50"
      >
        <div className="w-full flex justify-center">
          <img className="w-60" src="/assets/email.png" alt="" />
        </div>
        <div className="w-full text-black">
          {/* SubsCribe Form */}

          <Form handleSubmit={handleSubmit} form={form}></Form>
        </div>
      </div>
    </Section>
  );
};

export default NewsLetter;
