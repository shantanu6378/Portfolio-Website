import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import customer from "../../Assets/Projects/CustomerChurn.png";
import fashion from "../../Assets/Projects/fashion.png";
// import emotion from "../../Assets/Projects/emotion.png";
import covid from "../../Assets/Projects/Covid.jpg";
import nlp from "../../Assets/Projects/nlp.webp";
import market from "../../Assets/Projects/market.jpg";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Academic <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <p style={{ color: "white", fontSize: '30px'}}>
          Data Science Projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              init = {67}
              imgPath={nlp}
              isBlog={false}
              title="Ukraine-Russia Twitter Analysis"
              description="This project leverages NLP to predict the degree of retweet proneness of a tweet on the Ukraine-Russia War. This can be used to monitor and curb tweets that can incite public emotions."
              ghLink="https://github.com/shantanu6378/Ukraine-Russia-War-Twitter-data-Analysis"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              init = {45}
              imgPath={customer}
              isBlog={false}
              title="Customer Churn Prediction"
              description = "Here I have analyzed customer banking data to predict customer churn in an unbalanced dataset. I attained an F1-score of 94%."
              ghLink="https://github.com/shantanu6378/Customer_Churn_Prediction"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              init = {59}
              imgPath={fashion}
              isBlog={false}
              title="Fashion Items Image Classification"
              description="This project deals with classifying images of fashion products using ensemble models. The model achieves an F1 score of 91.5%."
              ghLink="https://github.com/shantanu6378/Fashion-MNIST-Image-Classification"
          
            />
          </Col>
          <p style={{ color: "white", fontSize: '30px' }}>
          Data Visualization and Querying projects
          </p>
          <Col md={4} className="project-card">
            <ProjectCard
              init = {32}
              imgPath={covid}
              isBlog={false}
              title="COVID-19 Data Tracker"
              description="This project deals with the visual representation of data regarding COVID-19 in the different states and counties. I have built an interactive web tool using Dash to view the different features."
              ghLink="https://github.com/shantanu6378/Dashboard-for-COVID-19"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              init = {27}
              imgPath={market}
              isBlog={false}
              title="e-Marketplace User Interface"
              description = "This project deals with creating an e-Marketplace database and a user interface to interact with the database. Apart from providing buying and selling options, it also employs a trigger like waiving off the delivery fee if the order amount exceeds a threshold, as is practised by many e-marketplaces"
              ghLink="https://github.com/shantanu6378/e-Marketplace-Database-Interface"
              demoLink="https://www.youtube.com/watch?v=DwoIt4CO-3U&ab"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
