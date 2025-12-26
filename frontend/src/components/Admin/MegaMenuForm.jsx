import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createMegaMenu,
  updateMegaMenu,
  resetMegaMenuState,
} from "../../features/megaMenuSlice";

/* ---------- Helpers ---------- */
const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const generateItemLink = (menuKey, label) =>
  `/services/${menuKey}/${slugify(label)}`;

const emptyMenu = {
  key: "",
  title: "",
  sections: [],
};

const MegaMenuForm = ({ editData = null, onClose }) => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.megaMenu
  );

  const isEdit = Boolean(editData);
  const [menu, setMenu] = useState(emptyMenu);

  /* ---------- Load Edit Data ---------- */
  useEffect(() => {
    if (!editData) {
      setMenu(emptyMenu);
      return;
    }

    setMenu({
      key: editData.menu_key,
      title: editData.title,
      sections: editData.data?.sections || [],
    });
  }, [editData]);

  /* ---------- Reset After Success ---------- */
  useEffect(() => {
    if (!success) return;

    dispatch(resetMegaMenuState());
    if (!isEdit) setMenu(emptyMenu);
    onClose?.();
  }, [success, dispatch, isEdit, onClose]);

  /* ---------- Menu Title Change ---------- */
  const handleRootChange = (e) => {
    const title = e.target.value;
    const menuKey = slugify(title);

    setMenu((prev) => ({
      ...prev,
      title,
      key: menuKey,
      sections: prev.sections.map((section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          link: generateItemLink(menuKey, item.label),
        })),
      })),
    }));
  };

  /* ---------- Section Logic ---------- */
  const addSection = () =>
    setMenu((prev) => ({
      ...prev,
      sections: [...prev.sections, { heading: "", items: [] }],
    }));

  const updateSectionHeading = (index, value) =>
    setMenu((prev) => {
      const sections = [...prev.sections];
      sections[index] = { ...sections[index], heading: value };
      return { ...prev, sections };
    });

  const removeSection = (sectionIndex) => {
    setMenu((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, idx) => idx !== sectionIndex),
    }));
  };

  /* ---------- Item Logic ---------- */
  const addItem = (sectionIndex) =>
    setMenu((prev) => {
      const sections = [...prev.sections];
      sections[sectionIndex] = {
        ...sections[sectionIndex],
        items: [...sections[sectionIndex].items, { label: "", link: "" }],
      };
      return { ...prev, sections };
    });

  const updateItem = (sIndex, iIndex, field, value) =>
    setMenu((prev) => {
      const sections = [...prev.sections];
      const item = { ...sections[sIndex].items[iIndex] };

      item[field] = value;
      if (field === "label") {
        item.link = generateItemLink(prev.key, value);
      }

      sections[sIndex].items[iIndex] = item;
      return { ...prev, sections };
    });

  const removeItem = (sectionIndex, itemIndex) => {
    setMenu((prev) => {
      const sections = [...prev.sections];
      sections[sectionIndex] = {
        ...sections[sectionIndex],
        items: sections[sectionIndex].items.filter(
          (_, idx) => idx !== itemIndex
        ),
      };
      return { ...prev, sections };
    });
  };

  /* ---------- Submit ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      menu_key: menu.key,
      title: menu.title,
      data: { sections: menu.sections },
    };

    isEdit
      ? dispatch(updateMegaMenu({ menuKey: editData.menu_key, payload }))
      : dispatch(createMegaMenu(payload));
  };

  return (
    <Container fluid="md">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4">
            {isEdit ? "Edit Mega Menu" : "Create Mega Menu"}
          </Card.Title>

          {loading && <p className="text-info">Saving...</p>}
          {error && <p className="text-danger">{error}</p>}

          <Form onSubmit={handleSubmit}>
            {/* Menu Title + Key */}
            <Row className="mb-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Menu Title</Form.Label>
                  <Form.Control
                    value={menu.title}
                    onChange={handleRootChange}
                    placeholder="e.g. Services"
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Menu Key (auto-generated)</Form.Label>
                  <Form.Control
                    value={menu.key}
                    readOnly
                    className="bg-light"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Sections */}
            {menu.sections.map((section, sIndex) => (
              <Card key={sIndex} className="mb-4 border">
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Section Heading</Form.Label>
                    <Form.Control
                      value={section.heading}
                      onChange={(e) =>
                        updateSectionHeading(sIndex, e.target.value)
                      }
                      placeholder="e.g. Corporate Law"
                    />
                  </Form.Group>

                  {/* Items */}
                  {section.items.map((item, iIndex) => (
                    <Row key={iIndex} className="mb-2 align-items-center">
                      <Col md={5}>
                        <Form.Control
                          value={item.label}
                          onChange={(e) =>
                            updateItem(sIndex, iIndex, "label", e.target.value)
                          }
                          placeholder="Item Label"
                        />
                      </Col>

                      <Col md={6}>
                        <Form.Control
                          value={item.link}
                          readOnly
                          className="bg-light"
                        />
                      </Col>

                      <Col md={1}>
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => removeItem(sIndex, iIndex)}
                        >
                          &times;
                        </Button>
                      </Col>
                    </Row>
                  ))}

                  {/* Section Actions */}
                  <div className="d-flex justify-content-between mt-2">
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => addItem(sIndex)}
                    >
                      + Add Item
                    </Button>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => removeSection(sIndex)}
                    >
                      Delete Section
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}

            {/* Form Actions */}
            <div className="d-flex justify-content-between mt-4">
              <Button variant="outline-secondary" onClick={addSection}>
                + Add Section
              </Button>

              <div>
                {onClose && (
                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                )}
                <Button type="submit" variant="primary">
                  {isEdit ? "Update Menu" : "Save Menu"}
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MegaMenuForm;
