import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Card } from "react-bootstrap";
import MegaMenuForm from "../../components/Admin/MegaMenuForm";
import DisplayMegaMenu from "../../components/Admin/DisplayMegaMenu";

const ServiceDashboard = () => {
  const [key, setKey] = useState("service");

  const [editMenu, setEditMenu] = useState(null);

    const handleEdit = (menu) => {
      setEditMenu(menu);
      setKey("addservice"); 
    };
    
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
                    <DisplayMegaMenu onEdit={ handleEdit } />
                  </div>
                </Tab>
                <Tab eventKey="addservice" title="Add Services">
                  <div className="p-3">
                    <MegaMenuForm editData={editMenu}
                      onClose={() => {
                        setEditMenu(null);
                        setKey("service"); 
                      }} />
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
