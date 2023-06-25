import React from "react";
import { Container, Row} from "react-bootstrap";
// import ProjectCard from "./Projects/ProjectCards";
import WorkCard from "./WorkCards";
// import Particle from "../Particle";
import uiuc from "../Assets/uiuc.png";
import mole from "../Assets/mole.webp";
import coaching from "../Assets/coach.jpg";


function Works() {
  return (
    <Container fluid className="work-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Relevant Work <strong className="purple">Experiences </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
            
            <WorkCard className="project-card"
              imgPath={uiuc}
              isBlog={false}
              title="Research Assistant (Aug 2022 - present)"
              subtitle = "ETC Lab, Department of Applied Health Sciences, University of Illinois, Urbana-Champaign"
              description = {[{text: 'Collaborated with a team of clinicians, health experts, programmers, etc. to create a master markdown file to transform raw survey data into actionable dataset, reducing time of preparation by 50%.', hasSubitems: false}, {text: 'Presented SEM model findings to predict vital signs at several time points with/without specific interventions with 95% accuracy to a diverse team of researchers. ', hasSubitems: false}, {text: 'Co-ordinated with programmers to develop a React web application that registers survey responses of participants significantly cutting down survey time from months to days.', hasSubitems: false}]}
              ghLink="https://github.com/shantanu6378/Ukraine-Russia-War-Twitter-data-Analysis"
          
            />
          

          <WorkCard style= {{padding: '10px'}}
              imgPath={mole}
              isBlog={false}
              title="Data Scientist (May 2018 - July 2021)"
              subtitle = "Ministry of Labor and Employment, Government of India"
              description = {[{text: 'Unemployment Profiling on Labour Bureau’s data (EUS 2019):', hasSubitems: true, subitems:['Analyzed demographics data to predict unemployment trend at city, state and individual level using Decision Trees, Logistic Regression, SVM, et al, attaining an AUROC of 67%. Presented the findings to the top management.', 'Identified the prominent factors for youth unemployment and resultant monetary deprivation using logistic and linear regression respectively, boosting the cause for targeted government spending which resulted in raising the overall employability of youth from 45.9% in 2019 to 50.3% in 2022.']},
              {text: 'Worked on efficiently communicating data to the transfer committee of EPFO, a subordinate organization, using workforce dashboard created using Power BI, to make employee transfer procedures fair and transparent.', hasSubitems: false}
              ]}
              ghLink="https://github.com/shantanu6378/Ukraine-Russia-War-Twitter-data-Analysis"
          
            />

          <WorkCard style= {{padding: '10px'}}
              imgPath={coaching}
              isBlog={false}
              title="Data Scientist (June 2015 - Mar 2018)"
              subtitle = "IITian's Hub (Higher Educational Institute)"
              description = {[{text: 'Created a practice question recommendation system for students on the e-learning platform using cosine similarity.', hasSubitems: false, },
              {text: 'Developed a data-driven subscription prediction model for the marketing team, enabling targeted emails and offers that resulted in a significant 30% revenue growth while optimizing costs.', hasSubitems: false}
              ]}
              ghLink="https://github.com/shantanu6378/Ukraine-Russia-War-Twitter-data-Analysis"
          
            />
          
        </Row>
      </Container>
    </Container>
  );
}

export default Works;
