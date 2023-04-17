import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function WorkCards(props) {
  const items = props.description.map((item) => {
      if (item.hasSubitems) {
        // if there are subitems, create a nested list
        const subitems = item.subitems.map((subitem) => <li>{subitem}</li>);
        return (
          <li>
            {item.text}
            <ul>{subitems}</ul>
          </li>
        );
      } else {
        // if there are no subitems, just return a regular list item
        return <li>{item.text}</li>;
      }
    });

    const listStyle = {
      listStyleType: 'disc',
      paddingLeft: '1em',
    };

    const itemStyle = {
      display: 'block',
      marginBottom: '0.5em',
    };


  return (
    <Card className="work-card-view" style={{ marginBottom: "20px" }}>
        <Row>
            <Col md={4} style = {{marginLeft: '0px'}}>
            <Card.Img src={props.imgPath} alt="card-img" style={{ width: "200px", height: "200px" , padding: '10px', marginLeft: '-150px'}} />
            </Col>
            <Col md={8}>
            <Card.Body>
                <Card.Title style={{ textAlign: "left", marginBottom: "0.5rem", marginLeft: '-175px', fontSize: '20px' }}>{props.title}</Card.Title>
                <Card.Title style={{ textAlign: "left", marginBottom: "0.5rem", marginLeft: '-175px', fontSize: '15px', color: 'violet'  }}>{props.subtitle}</Card.Title>

                <Card.Text style={{ textAlign: "justify", padding: '1px', marginLeft: '-175px'}}>
                
                <ul style={listStyle}>{items.map((item) => <li style={itemStyle}>{item}</li>)}</ul>
              
                </Card.Text>
                {/* <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
                </Button> */}
            </Card.Body>
            </Col>
        </Row>
    </Card>
  );
}
export default WorkCards;
