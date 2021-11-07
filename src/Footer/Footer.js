import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css';

function Footer() {
  return (
    <footer>
    <Container className='center' id='footer'>
        <Row>
          <Col className="text-center py-3">This is a Chingu project </Col>

           {/*  <Link to="https://github.com/oscarsanchez13" target="_blank"><img src="./icons/github-icon.png" alt="github icon"/></Link>&nbsp;
            <Link to="https://www.linkedin.com/in/oscarsanchez13/" target="_blank"><img src="./icons/linkedin-icon.png" alt="linkedin icon"/></Link>&nbsp;
            <Link to="mailto:architectsanchez13@gmail.com"><img src="../icons/mail-icon.png" alt="email icon"/></Link>           
            {/* <p>Created by </p> */} 
        </Row>
    </Container>
    </footer>
  );
}

export default Footer;

// It would be great if we could desplay a mini round image of eachone of us and on 
// hover it displays the above 3 icons, that way we can all have our contact information.