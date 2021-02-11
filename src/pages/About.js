import React from "react"

//Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const About = (props) => {
    return(
        <div className="about-div">
          <h2 className="about-h2">About</h2>
          <p className="about-p">Hustle Busters is a light, 70's-themed CRM tool built as a group project for General Assembly's Software Engineering Immersive. The backend uses a custom Express database. The user interface was created with React and React-Bootstrap. It currently includs only basic CRUD functionality, but we'll keep working to expand!</p>
          <Card style={{ width: '18rem' }} 
                className="about-card">
            <Card.Img 
                variant="top" 
                src="https://res.cloudinary.com/dcvgmixhx/image/upload/v1612977845/Samantha_Solomon_2_BW_v2_korbt1.jpg" 
                alt="photo of Samantha Solomon" />
            <Card.Body className="about-card-body">
              <Card.Title className="about-card-title">Samantha Solomon (she/her)</Card.Title>
              <Card.Text className="about-card-text">
                Samantha the was main wireframe designer of the app and trello taskmaster. She focused on frontend engineering and built out the navigation, user registration page, profile page, and this page. She also directed styling.
              </Card.Text>
              <Button 
                className="about-card-button" 
                variant="outline-danger" 
                href="https://github.com/SamanthaSolomon" 
                target="_blank">GitHub</Button>
              <Button 
                className="about-card-button" 
                variant="outline-danger" 
                href="https://samanthasolomon.github.io/" 
                target="_blank">Website</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} 
                className="about-card">
            <Card.Img 
                variant="top" 
                src="https://res.cloudinary.com/dcvgmixhx/image/upload/v1612977472/Hustle%20Busters/85876CC9-31C8-4381-A220-5CE60872753F_oclce8.jpg" alt="photo of Gary Barkauski"/>
            <Card.Body className="about-card-body">
              <Card.Title className="about-card-title">Gary Barkauski (he/him)</Card.Title>
              <Card.Text className="about-card-text">
                Gary played the full stack roll, touching both the backend and front end of the app. He worked on... He also came up with the idea for this app! 
              </Card.Text>
              <Button 
                className="about-card-button" 
                variant="outline-danger" 
                href="https://github.com/SamanthaSolomon" 
                target="_blank">GitHub</Button>
              <Button 
                className="about-card-button" 
                variant="outline-danger" 
                href="https://samanthasolomon.github.io/" 
                target="_blank">Website</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} 
                className="about-card">
            <Card.Img 
                variant="top" 
                src="https://res.cloudinary.com/dcvgmixhx/image/upload/v1608597927/sample.jpg" 
                alt="photo of Tory Lemons Jr." />
            <Card.Body className="about-card-body">
              <Card.Title className="about-card-title">Troy Lemons Jr. (he/him)</Card.Title>
              <Card.Text className="about-card-text">
                Troy was the backend engineering master of this app. He built out the three data models and CRUD routes for each. On the frontend he worked on ...
              </Card.Text>
              <Button 
                className="about-card-button" 
                variant="outline-danger" 
                href="https://github.com/SamanthaSolomon" 
                target="_blank">GitHub</Button>
              <Button 
                className="about-card-button" 
                variant="outline-danger" 
                href="https://samanthasolomon.github.io/" 
                target="_blank">Website</Button>
            </Card.Body>
          </Card>  
        </div>
    )
}

export default About