"use client";
import React, { useState } from "react";
import styles from "../contactus.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert("Failed to send email. Please check the logs.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.description}>
        Feel free to get in touch using the form below.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Your Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Your Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className={styles.submitGroup}>
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}
