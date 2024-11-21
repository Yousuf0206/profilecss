"use client"
import React from 'react';
import styles from '../about.module.css';

export default function About() {
  return (
    <main className={styles.main} aria-label="About Me" role="contentinfo">
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        I am a full-stack developer with experience in Next.js, React, and CSS.
        I love building web applications that are both functional and beautiful.
      </p>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>My Services</h2>
        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Web Development</h3>
            <p className={styles.serviceDescription}>
              Building responsive and dynamic websites using Next.js, React, and CSS for a seamless user experience.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>API Integration</h3>
            <p className={styles.serviceDescription}>
              Integrating third-party APIs to extend the functionality of your applications.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>UI/UX Design</h3>
            <p className={styles.serviceDescription}>
              Designing modern and user-friendly interfaces with a focus on simplicity and usability.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Performance Optimization</h3>
            <p className={styles.serviceDescription}>
              Improving website performance with optimized code, faster load times, and better user experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
