import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateMegaMenu, resetMegaMenuState, getMegaMenuByKey } from "../../../features/megaMenuSlice";

/* ---------- Helpers ---------- */
const generateItemLink = (menuKey, label) =>
  `/services/${menuKey}/${label.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")}`;

const emptyCategory = {
  key: "",
  title: "",
  sections: [],
};

const EditCategory = ({ onClose }) => {
  const dispatch = useDispatch();
  const { menuKey } = useParams(); // from /admin/edit-category/:menuKey

  const { loading, success, error } = useSelector((state) => state.megaMenu);

  const [category, setCategory] = useState(emptyCategory);

  // Fetch menu data on mount
  useEffect(() => {
    if (menuKey) {
      dispatch(getMegaMenuByKey(menuKey)).then((res) => {
        if (res.payload) {
          const data = res.payload;
          setCategory({
            key: data.menu_key,
            title: data.title,
            sections: data.data?.sections || [],
          });
        }
      });
    }
  }, [menuKey, dispatch]);

  // Reset state after successful update
  useEffect(() => {
    if (success) {
      dispatch(resetMegaMenuState());
      onClose?.();
    }
  }, [success, dispatch, onClose]);

  // Update title and regenerate links
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setCategory((prev) => ({
      ...prev,
      title,
      sections: prev.sections.map((section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          link: generateItemLink(prev.key, item.label),
        })),
      })),
    }));
  };

  /* ---------- Section & Item Handlers ---------- */
  const addSection = () =>
    setCategory((prev) => ({
      ...prev,
      sections: [...prev.sections, { heading: "", items: [] }],
    }));

  const updateSectionHeading = (index, value) => {
    const sections = [...category.sections];
    sections[index] = { ...sections[index], heading: value };
    setCategory((prev) => ({ ...prev, sections }));
  };

  const removeSection = (index) =>
    setCategory((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));

  const addItem = (sIndex) => {
    const sections = [...category.sections];
    sections[sIndex] = {
      ...sections[sIndex],
      items: [...sections[sIndex].items, { label: "", link: "" }],
    };
    setCategory((prev) => ({ ...prev, sections }));
  };

  const updateItem = (sIndex, iIndex, field, value) => {
    const sections = [...category.sections];
    const item = { ...sections[sIndex].items[iIndex] };
    item[field] = value;
    if (field === "label") item.link = generateItemLink(category.key, value);
    sections[sIndex].items[iIndex] = item;
    setCategory((prev) => ({ ...prev, sections }));
  };

  const removeItem = (sIndex, iIndex) => {
    const sections = [...category.sections];
    sections[sIndex] = {
      ...sections[sIndex],
      items: sections[sIndex].items.filter((_, idx) => idx !== iIndex),
    };
    setCategory((prev) => ({ ...prev, sections }));
  };

  /* ---------- Submit Handler ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      menu_key: category.key,
      title: category.title,
      data: { sections: category.sections },
    };

    dispatch(updateMegaMenu({ menuKey: category.key, payload }));
  };

  return (
    <Container fluid="md">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4">Edit Category</Card.Title>

          {loading && <p className="text-info">Saving...</p>}
          {error && <p className="text-danger">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Category Title</Form.Label>
                  <Form.Control
                    value={category.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. Business Registration"
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Category Key (read-only)</Form.Label>
                  <Form.Control value={category.key} readOnly className="bg-light" />
                </Form.Group>
              </Col>
            </Row>

            {category.sections.map((section, sIndex) => (
              <Card key={sIndex} className="mb-4 border">
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Section Heading</Form.Label>
                    <Form.Control
                      value={section.heading}
                      onChange={(e) => updateSectionHeading(sIndex, e.target.value)}
                      placeholder="e.g. Corporate Law"
                    />
                  </Form.Group>

                  {section.items.map((item, iIndex) => (
                    <Row key={iIndex} className="mb-2 align-items-center">
                      <Col md={5}>
                        <Form.Control
                          value={item.label}
                          onChange={(e) => updateItem(sIndex, iIndex, "label", e.target.value)}
                          placeholder="Item Label"
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Control value={item.link} readOnly className="bg-light" />
                      </Col>
                      <Col md={1}>
                        <Button size="sm" variant="outline-danger" onClick={() => removeItem(sIndex, iIndex)}>
                          &times;
                        </Button>
                      </Col>
                    </Row>
                  ))}

                  <div className="d-flex justify-content-between mt-2">
                    <Button size="sm" variant="outline-primary" onClick={() => addItem(sIndex)}>
                      + Add Item
                    </Button>
                    <Button size="sm" variant="outline-danger" onClick={() => removeSection(sIndex)}>
                      Delete Section
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}

            <div className="d-flex justify-content-between mt-4">
              <Button variant="outline-secondary" onClick={addSection}>
                + Add Section
              </Button>

              <div>
                {onClose && (
                  <Button variant="secondary" className="me-2" onClick={onClose}>
                    Cancel
                  </Button>
                )}
                <Button type="submit" variant="primary">
                  Update Category
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditCategory;
