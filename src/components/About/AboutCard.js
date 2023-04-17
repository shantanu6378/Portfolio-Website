import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import { GiBulletBill } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shantanu Solanki </span>
            from <span className="purple"> Champaign, Illinois.</span>
            <br />I am a graduate in Statistics from University of Illinois, Urbana-Champaign and pursuing the field of Data Science/Machine Learning.
            <br />
            <br />
            Apart from coding and statistical modeling, I love:
          </p>
          <ul>
            <li className="about-activity">
              <GiBulletBill /> Playing racquet sports
            </li>
            <li className="about-activity">
              <GiBulletBill /> Watching movies
            </li>
            <li className="about-activity">
              <GiBulletBill /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
