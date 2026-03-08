import React, { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
// import "./Contact.css"; // if your CSS is separate

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_x2xlkwe",
        "template_w7oteir",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "1f2BbeuA2Bwq6S2Ez"
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact">

      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h3>Let’s Build Something Impactful</h3>

          <p>
            Actively seeking opportunities in full-stack engineering and AI-driven solutions.
            If you have an idea, project, or collaboration in mind,
            let’s turn it into something meaningful.
          </p>

          <p>
            I usually respond within a day. Looking forward to connecting!
          </p>

          <h4>Connect With Me</h4>

          <div className="contact-links">

            <a
              href="https://github.com/saicharitha956"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>

            <a
              href="https://in.linkedin.com/in/saicharitha-jali-9004b1366"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>

            <a href="mailto:saicharitha1356@gmail.com">
              <Mail size={20} />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <label>Name </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
            />

            <label>Email </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />

            <label>Message </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or just say hello!"
            />

            <button type="submit" disabled={loading}>
              <Send size={16} style={{ marginRight: "6px" }} />
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;