import React from 'react';
import '../styles/Home.css'; // Ensure you have the right path to your CSS file
import image from "../assets/PES1202203054-anusha.s.j.jpg";
import Resume from '../assets/anushasjresume_removed (1).pdf';

function Home() {
  // Function to handle the "Hire Me" button click
  const handleHireMe = () => {
    window.location.href = "mailto:anushasj456@gmail.com"; // Update with your email
  };

  // Function to handle the "Download Resume" button click
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume; // Update with the path to your resume file
    link.setAttribute('download', 'resume.pdf'); // Set the name of the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section">
      <div className="section__container">
        <div className="content">
          <h1 className="title">
            I'm <span>Anusha S J<br /></span> A qualified BCA and MCA graduate ready to leverage my skills in a dynamic work environment
          </h1>
          <p className="description">
            Hi, I am a recent MCA graduate (2024) actively seeking a full-time opportunity to apply and further develop my skills. I have technical expertise in Java, Python, software engineering, React.js, web development, and machine learning, with hands-on experience through various projects. I am eager to contribute to a dynamic team and am committed to working hard, continuously learning, and delivering high-quality results. I look forward to gaining valuable experience and contributing to the growth of the company.
          </p>

          <div className="action__btns">
            {/* Hire Me button with email functionality */}
            <button className="hire__me" onClick={handleHireMe}>Hire Me</button>
            {/* Download Resume button with download functionality */}
            <button className="portfolio" onClick={handleDownloadResume}>Download Resume</button>
          </div>
        </div>
        <div className="image">
          <img src={image} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
