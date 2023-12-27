import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

export const Location = () => {
  return (
    <>
    <div className="contact container">
      <h2>Contact Us</h2>
      <Row>
        <Col md={6}>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                <strong>Email:</strong> sabinkshetri.work@gmail.com
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> +977 9746233201
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong>Kathmandu Nepal
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="map-card">
            <Card.Body>
              <Card.Title>Location</Card.Title>
            
              <iframe
                title="Map"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1703610030891!5m2!1sen!2snp"
                allowFullScreen
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    
    
    
    </>
  )
}
