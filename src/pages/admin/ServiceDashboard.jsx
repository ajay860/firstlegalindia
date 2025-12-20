import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Card } from "react-bootstrap";
import ServiceForm from "../../components/Admin/ServiceForm";

const ServiceDashboard = () => {
  const [key, setKey] = useState("service");
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={12}>
          <Card className="border-0">
            <Card.Body>
              <Tabs
                id="service-dashboard-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 border-0 border-bottom"
                justify
              >
                <Tab eventKey="service" title="Service">
                  <div className="p-3">
                    <h5>Service</h5>
                    <p>
                      This section provides an overview of your services.
                      Add, edit, or manage them from this dashboard.
                    </p>
                    <ServiceForm />
                  </div>
                </Tab>
                <Tab eventKey="category" title="Category">
                  <div className="p-3">
                    <h5>User Profile</h5>
                    <p>
                      Manage your profile information, view your activity, and update settings.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDashboard;
