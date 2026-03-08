import React from "react";
import { FaAws, FaDev, FaCertificate, FaRobot } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="certifications">

      <h2 className="section-title">
        My <span>Certifications</span>
      </h2>

      <div className="certifications-container">

        <div className="certificate-card">
          <div className="cert-icon">
            <FaAws />
          </div>

          <h3>AWS Cloud Virtual Internship</h3>
          <p>Issued by Eduskills Academy — 2024</p>
          <a
            href="https://drive.google.com/file/d/17ADWAdTQoBhqLAh9P9bYQsvTej2WXqfP/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential →
          </a>
        </div>


        <div className="certificate-card">
          <div className="cert-icon">
            <FaDev />
          </div>

          <h3>DevOps for Engineering</h3>
          <p>Issued by Infosys Springboard — 2024</p>
          <a
            href="https://drive.google.com/file/d/1QZiyHNf-lmGq9TV3pEBwh7NvdGFkrkd3/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential →
          </a>
        </div>


        <div className="certificate-card">
          <div className="cert-icon">
            <FaCertificate />
          </div>

          <h3>MERN Stack Internship</h3>
          <p>Issued by Brain O Vision — 2025</p>
          <a
            href="https://drive.google.com/file/d/1pb4DwJO0OCPxhEnLgGCXYbpNIwlB7EHd/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential →
          </a>
        </div>


        <div className="certificate-card">
          <div className="cert-icon">
            <FaRobot />
          </div>

          <h3>Generative AI Certification</h3>
          <p>Issued by NASSCOM — 2026</p>
          <a
            href="https://drive.google.com/file/d/1uOB4_9mfH6uBHnaiHrT4AA6LQADT5Sau/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential →
          </a>
        </div>

      </div>

    </section>
  );
}

export default Certifications;