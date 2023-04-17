import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ArboretumPic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who <span className="purple"> I am </span>
            </h1>
            <p className="home-about-body">
              I am a Masters in Statistics and deeply interested in solving complex problems in field of Data Science
              / Machine Learning.
              <br />
              <br />I am fluent in programming languages like 
              <i>
                <b className="purple"> Python, R and C++. </b>
              </i>
              <br />
              <br />
              My fields of interest include &nbsp;
              <i>
                <b className="purple">
                  Deep Learning and Natural Language Processing.
                </b>
              </i>
              <br />
              <br />
              I also like developing products using <b className="purple">Node.js</b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Places to find me</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            <li className="social-icons">
                <a
                  href="mailto:solanki7@illinois.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shantanu6378"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shantanu-solanki-014282202/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/shantanu6378"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              
              
              {/* <EmailLink/> */}
          
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
