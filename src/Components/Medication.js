
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const MedicationApp = () => {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle medication submission
    console.log('Medication:', medication);
    console.log('Dosage:', dosage);
    console.log('Frequency:', frequency);
    // Add additional logic for storing medication data
    // and displaying success message
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Medication Management</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="medication">
              <Form.Label>Medication</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter medication name"
                value={medication}
                onChange={(e) => setMedication(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="dosage">
              <Form.Label>Dosage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter dosage"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="frequency">
              <Form.Label>Frequency</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicationApp;