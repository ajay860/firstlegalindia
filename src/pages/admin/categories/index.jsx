import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Card } from "react-bootstrap";
// import ServiceForm from "../../components/Admin/ServiceForm";
import MegaMenuForm from "../../../components/Admin/MegaMenuForm";
import DisplayMegaMenu from "../../../components/Admin/DisplayMegaMenu";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [key, setKey] = useState("service");

  const [editMenu, setEditMenu] = useState(null);

  const navigate = useNavigate();

    const handleEdit = (menu) => {
    setEditMenu(menu);
    // navigate to add/edit page
    navigate(`/admin/edit-category/${menu.menu_key}`);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={12}>
          <Card className="border-0">
            <Card.Body>
                 <h5>Service</h5>
                    <p>
                      This section provides an overview of your services.
                      Add, edit, or manage them from this dashboard.
                    </p>
                    <DisplayMegaMenu onEdit={ handleEdit } />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
