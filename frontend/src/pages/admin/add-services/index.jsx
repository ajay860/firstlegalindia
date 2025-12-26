import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import SelectSubCategory from "../../../components/Admin/SelectSubCategory";
import RichTextEditor from "../../../components/Admin/RichTextEditor";

import {
  createService,
  updateService,
  getServiceById,
  resetServiceState,
  selectServiceState,
} from "../../../features/services/serviceSlice";

/* ================= INITIAL STATE ================= */
const initialState = {
  title: "",
  sort_title: "",
  description: "",
  content: "",
  bgImage: null,
  link: "",
  showOnHome: false,
  category: null,
  subcategory: null,
};

const AddServices = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const { loading, success, error, service } = useSelector(selectServiceState);

  const [formData, setFormData] = useState(initialState);

  /* ================= HELPERS ================= */
  const generateLink = (text, maxWords = 6) => {
    if (!text) return "";

    const words = text
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .slice(0, maxWords)
      .map((word) => word.replace(/[^a-z0-9]+/g, ""))
      .filter(Boolean);

    return words.join("-");
  };

  const isFormValid = useMemo(() => {
    const contentText = formData.content.replace(/<(.|\n)*?>/g, "").trim();
    return (
      formData.title.trim() !== "" &&
      formData.sort_title.trim() !== "" &&
      formData.description.trim() !== "" &&
      contentText !== ""
    );
  }, [formData]);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
      ...(name === "title" && {
        link: '/services/'+generateLink(value),
        sort_title: prev.sort_title || value,
      }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("sort_title", formData.sort_title);
    payload.append("description", formData.description);
    payload.append("article_content", formData.content);
    payload.append("link", formData.link);
    payload.append("display_to_home", formData.showOnHome);

    if (formData.category) payload.append("category_id", formData.category.value);
    if (formData.subcategory)
      payload.append("sub_category_id", formData.subcategory.value);
    if (formData.bgImage) payload.append("bgImage", formData.bgImage);

    if (isEdit) {
      dispatch(updateService({ id, payload }));
    } else {
      dispatch(createService(payload));
    }
  };

  /* ================= EFFECTS ================= */

  // Fetch service for edit
  useEffect(() => {
    if (isEdit) {
      dispatch(getServiceById(id));
    }
  }, [dispatch, isEdit, id]);

  // Populate form in edit mode
  useEffect(() => {
    if (isEdit && service) {
      setFormData({
        title: service.title || "",
        sort_title: service.sort_title || "",
        description: service.description || "",
        content: service.article_content || "",
        link: service.link || "",
        showOnHome: Boolean(service.display_to_home),
        category: service.category
          ? { label: service.category.name, value: service.category.id }
          : null,
        subcategory: service.subcategory
          ? { label: service.subcategory.name, value: service.subcategory.id }
          : null,
        bgImage: null, // never prefill file input
      });
    }
  }, [isEdit, service]);

  // Handle success navigation
  useEffect(() => {
    if (success) {
      dispatch(resetServiceState());
      navigate(
        service?.display_to_home
          ? "/admin/service-slider-data"
          : "/admin/all-services"
      );
    }
  }, [success, dispatch, navigate, service]);

  /* ================= UI ================= */
  return (
    <Container fluid="md">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h4 className="mb-1">
                {isEdit ? "Update Service" : "Create New Service"}
              </h4>
              <p className="text-muted mb-4">
                Add service details, content, and visibility settings
              </p>

              {error && (
                <Alert variant="danger">
                  {error.message || "Something went wrong"}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* CATEGORY */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Category</h6>
                    <SelectSubCategory
                      value={{
                        category: formData.category,
                        subcategory: formData.subcategory,
                      }}
                      onCategoryChange={(category) =>
                        setFormData((p) => ({ ...p, category }))
                      }
                      onSubCategoryChange={(subcategory) =>
                        setFormData((p) => ({ ...p, subcategory }))
                      }
                    />
                  </Card.Body>
                </Card>

                {/* BASIC INFO */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Basic Information</h6>

                    <Form.Group className="mb-3">
                      <Form.Label>Service Title *</Form.Label>
                      <Form.Control
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Title for home service *</Form.Label>
                      <Form.Control
                        name="sort_title"
                        value={formData.sort_title}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="e.g. Microfinance Registration"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Auto Generated URL</Form.Label>
                      <Form.Control value={formData.link} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Short Description *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>

                {/* MEDIA */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Media</h6>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="bgImage"
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </Card.Body>
                </Card>

                {/* CONTENT */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Service Content *</h6>
                    <RichTextEditor
                      value={formData.content}
                      onChange={(html) =>
                        setFormData((p) => ({ ...p, content: html }))
                      }
                      disabled={loading}
                    />
                  </Card.Body>
                </Card>

                {/* VISIBILITY */}
                <Card className="mb-4">
                  <Card.Body>
                    <Form.Check
                      type="switch"
                      label="Show this service on Home Page"
                      name="showOnHome"
                      checked={formData.showOnHome}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </Card.Body>
                </Card>

                {/* ACTIONS */}
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setFormData(initialState)}
                    disabled={loading}
                  >
                    Reset
                  </Button>

                  <Button
                    type="submit"
                    variant="dark"
                    disabled={!isFormValid || loading}
                  >
                    {loading ? (
                      <>
                        <Spinner size="sm" /> Saving...
                      </>
                    ) : isEdit ? (
                      "Update Service"
                    ) : (
                      "Create Service"
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddServices;
