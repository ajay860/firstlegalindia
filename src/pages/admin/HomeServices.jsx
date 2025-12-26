import { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Card } from "react-bootstrap";
import DisplayHomeServices from "../../components/Admin/DisplayHomeServices";
import ServiceForm from "../../components/Admin/ServiceForm";

const HomeServices = () => {
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
                    <h5>Home Page Service</h5>
                    <DisplayHomeServices />
                  </div>
                </Tab>
                <Tab eventKey="addservice" title="Add Services">
                  <div className="p-3">
                    <ServiceForm />
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

export default HomeServices;
