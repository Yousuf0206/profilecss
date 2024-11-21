import Image from "next/image";
import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <div className={styles.hero}>
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/profile2.jpg"
            alt="Profile Picture"
            width={250}
            height={550}
            className={styles.profileImage}
          />
        </div>

        {/* Introduction Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>Crafting Digital Excellence</h1>
          <p className={styles.description}>
            Welcome to my portfolio! I specialize in designing and building seamless, functional, and visually stunning web applications. Whether You're looking to bring your vision to life or need a technical partner to create robust digital solutions, I’m here to deliver.
          </p>
          <p className={styles.description}>
            With a passion for innovation and a commitment to quality, I help clients achieve their goals through tailored web solutions. Let’s work together to create something extraordinary.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
