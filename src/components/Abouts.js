import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/About.css';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone" style={{ marginLeft: '20px' }}>
          <h1>Projects</h1>
          <br/>
          <h3>Herbal Hair Care</h3>
          <p>
            Developed a machine learning application to predict hair loss and scalp diseases, offering natural remedy suggestions. Built a user-friendly web app using Flask, with a seamless front-end created using HTML, CSS, and JavaScript. Integrated data visualizations for tracking hair loss stages and implemented CNN models for accurate predictions. Managed data securely using a MySQL database and improved model performance with ImageDataGenerator for better generalization.
            <br />
            <a href="https://herba-hair-test.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </p>
          <p>
            Published a research paper titled <em>Herbal Hair Care</em> in the International Journal For Multidisciplinary Research (IJFMR), Paper ID: 20833, Volume 6, Issue 3, May-June 2024, on 2024-05-20. 
            <br />
            <a href="https://example-link-to-paper.com" target="_blank" rel="noopener noreferrer">Research Paper</a>
          </p>

          <h3>Breast Cancer Detection</h3>
          <p>
            Developed a machine learning model to classify breast cancer images as benign, malignant, or normal using a CNN. Built and trained the model with TensorFlow and Keras, achieving high accuracy. Image data was processed and augmented using OpenCV and TensorFlow's ImageDataGenerator. Monitored training and validation metrics, reaching over 99% confidence in predictions. Integrated the model into a web application for easy image upload and result display.
          </p>

          <h3>Student Placement Prediction</h3>
          <p>
            Developed a Flask web application that predicts student placement outcomes. Loaded a trained model using pickle and created a home route for the user interface. Implemented a prediction route to extract input data from a form, make predictions using the model, and display the result on the homepage, indicating whether the student is "Placed" or "Not Placed."
            <br />
            <a href="https://marks-calculate-o532.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </p>

          <h3>Smart Student Attendance System</h3>
          <p>
            Created an Android app to track student attendance and generate reports, providing a more efficient system. The app allows faculty to securely log in, view courses and student lists, and mark attendance in real-time. It also syncs data with an online server to keep records up to date.
          </p>

          <h3>Food Product Explorer</h3>
          <p>
            Developed an application using the OpenFoodFacts API to explore food products, providing users with information and search functionality.
            <br />
            <a href="https://anusha1421.github.io" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
