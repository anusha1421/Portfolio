import React, { useState } from 'react';
import '../styles/Experience.css';
import Octnet from '../assets/octnet.jpg';
import Internship from '../assets/Internship.jpg';
import InternshipImage2 from '../assets/intern-train.jpg'; // Path to the second image
import Techciti from '../assets/anusha.sj-techciti_page-0001.jpg';
import Codesoft from '../assets/Anusha SJ-1_page-0001.jpg';
import Python from '../assets/python-for-data-science.png';
import Aws from '../assets/aws.jpg';
import Sql from '../assets/sqlcertificate_page-0001.jpg';
import Powerbi from '../assets/power bi_page-0001.jpg';
import Reacts from '../assets/react js_page-0001.jpg';
import Jpmargon from '../assets/XiuvjcwqWRqH9oy38_JPMorgan Chase & Co._D23xLJSsWqyZnXjWH_1711576196742_completion_certificate_page-0001.jpg';
import Cybersecurity from '../assets/skill india(cyber security)_page-0001.jpg';
import Java from '../assets/hackerRank Challenge HackerRank_page-0001.jpg';
import Cloud from '../assets/cloud-core.png';

const experiences = [
  {
    title: 'Java Programming Intern at CodSoft',
    date: 'October 12, 2023 - January 10, 2024',
    description: 'Worked as a Java Programming Intern. Focused on core Java projects and gained valuable industry insights.',
    icon: 'fa-solid fa-code',
    certImage: Codesoft,
    link: 'https://github.com/anusha1421/CodeSoft',
    click: 'View the certificate',
  },
  {
    title: 'Artificial Intelligence Intern and training at Internship Studio',
    date: 'May 1, 2024 - June 5, 2024',
    description: 'Gained hands-on experience in AI development and machine learning.',
    icon: 'fa-solid fa-brain',
    certImages: [Internship, InternshipImage2], // Array of images for this entry
    link: 'https://github.com/anusha1421/internshipstudio',
  },
  {
    title: 'Software Developer Intern at TechCiti',
    date: 'January 10, 2024 - April 10, 2024',
    description: 'Developed bug triage strategies using Java, improved software performance, and collaborated on workflows.',
    icon: 'fa-solid fa-laptop-code',
    certImage: Techciti,
  },
  {
    title: 'Java Development Internship at OCTANET SERVICES PVT LTD',
    date: 'August 1st, 2024 - October 1st, 2024',
    description: 'Worked as a Java Programming Intern, I actively engaged in various projects and tasks assigned to me, demonstrating strong dedication and professionalism throughout my internship.',
    icon: 'fa-solid fa-laptop-code',
    certImage: Octnet,
    link: 'https://github.com/anusha1421/OctaNet.git',
  },
];

const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    date: 'May 2024',
    description: 'Received certification from AWS for Cloud Practitioner Essentials.',
    icon: 'fa-solid fa-cloud',
    certImage: Aws,
  },
  {
    title: 'Python 101 for Data Science',
    date: 'May 2024',
    description: 'Completed Python 101 for Data Science from IBM Cognitive Class.',
    icon: 'fa-solid fa-python',
    certImage: Python,
  },
  {
    title: 'SQL Certification (Basic to Advanced)',
    date: 'May 2024',
    description: 'Completed SQL certification course from Geekster.',
    icon: 'fa-solid fa-database',
    certImage: Sql,
  },
  {
    title: 'Power BI for Beginners',
    date: 'April 2024',
    description: 'Learned Power BI basics from Simplilearn.',
    icon: 'fa-solid fa-chart-bar',
    certImage: Powerbi,
  },
  {
    title: 'Cybersecurity',
    date: 'March 2024',
    description: 'Tech Mahindra Foundation through Skill India',
    icon: 'fa-solid fa-shield-alt',
    certImage: Cybersecurity,
  },
  {
    title: 'ReactJS for Beginners',
    date: 'April 2024',
    description: 'Learned ReactJS basics from Simplilearn.',
    icon: 'fa-solid fa-code',
    certImage: Reacts,
  },
  {
    title: 'Excel Skills Job Simulation',
    date: 'March 2024',
    description: 'Learned Excel Skills Job Simulation from JPMorgan Chase & Co.',
    icon: 'fa-solid fa-chart-bar',
    certImage: Jpmargon,
  },
  {
    title: 'Cloud Core',
    date: 'July 2024',
    description: 'Learned Cloud Core with practical applications from IBM Cognitive Class',
    icon: 'fa-solid fa-cloud',
    certImage: Cloud,
  },
  {
    title: 'Java',
    date: 'Jan 2024',
    description: 'Learned Java from HackerRank',
    icon: 'fa-solid fa-code',
    certImage: Java,
  },
];

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredCertIndex, setHoveredCertIndex] = useState(null);
  const [showCertImage, setShowCertImage] = useState(null);

  const handleCertClick = (index) => {
    setShowCertImage(index === showCertImage ? null : index); // Toggle the clicked certificate
  };

  return (
    <div className="experience-container">
      <h2>Internships</h2>
      <div className="experience-row">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="icon-container">
              <i className={exp.icon}></i>
              {showCertImage === index ? (
                exp.certImages ? (
                  <div className="cert-image-container">
                    {exp.certImages.map((image, imgIndex) => (
                      <img key={imgIndex} src={image} alt="Certificate" className="cert-image" />
                    ))}
                  </div>
                ) : (
                  <img src={exp.certImage} alt="Certificate" className="cert-image" />
                )
              ) : (
                <button onClick={() => handleCertClick(index)}>Click Me</button>
              )}
            </div>
            <div className="experience-details">
              <h3>{exp.title}</h3>
              <p>{exp.date}</p>
              <p>{exp.description}</p>
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2>Certifications</h2>
      <div className="experience-row">
        {certifications.map((cert, index) => (
          <div key={index} className="experience-item">
            <div className="icon-container">
              <i className={cert.icon}></i>
              {showCertImage === index ? (
                <img src={cert.certImage} alt="Certificate" className="cert-image" />
              ) : (
                <button onClick={() => handleCertClick(index)}>Click Me</button>
              )}
            </div>
            <div className="experience-details">
              <h3>{cert.title}</h3>
              <p>{cert.date}</p>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
