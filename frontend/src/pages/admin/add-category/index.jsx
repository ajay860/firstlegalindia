import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MegaMenuForm from "../../../components/Admin/MegaMenuForm";

const AddCategory = () => {
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
                <MegaMenuForm editData={editMenu}
                      onClose={() => {
                        setEditMenu(null);
                        setKey("service"); 
                      }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCategory;
