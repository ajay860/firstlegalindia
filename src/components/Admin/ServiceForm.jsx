import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


const ServiceForm = () => {
  const dispatch = useDispatch();
  // const { loading, error, success } = useSelector(selectService);

  const [formData, setFormData] = useState({
    sub_group_id: "",
    name: "",
    slug: "",
    description: "",
  });

  /* Auto-generate slug */
  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "name" && { slug: generateSlug(value) }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(
    //   createService({
    //     sub_group_id: Number(formData.sub_group_id),
    //     name: formData.name,
    //     slug: formData.slug,
    //     description: formData.description,
    //   })
    // );
  };

  /* Reset state on unmount */
  useEffect(() => {
    // return () => dispatch(resetServiceState());
  }, [dispatch]);

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6}>
          <Card className="shadow border-0">
            <Card.Body>
              {/* {error && <Alert variant="danger">{error}</Alert>} */}
              {/* {success && (
                <Alert variant="success">
                  Service created successfully!
                </Alert>
              )} */}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Sub Group ID</Form.Label>
                  <Form.Control
                    type="number"
                    name="sub_group_id"
                    value={formData.sub_group_id}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Slug</Form.Label>
                  <Form.Control
                    name="slug"
                    value={formData.slug}
                    readOnly
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>

                {/* <Button type="submit" variant="dark" disabled={loading}>
                  {loading ? "Saving..." : "Create Service"}
                </Button> */}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceForm;

