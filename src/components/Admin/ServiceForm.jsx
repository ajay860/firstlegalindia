import React, { useState, useEffect, useMemo } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import SelectSubCategory from "../../components/Admin/SelectSubCategory"
import RichTextEditor from "../../components/Admin/RichTextEditor"
import {
  createService,
  resetServiceState,
  selectServiceState,
} from "../../features/services/serviceSlice"

const initialState = {
  title: "",
  description: "",
  content: "",
  bgImage: null,
  link: "",
  showOnHome: false,
  category: null,
  subcategory: null,
}

const ServiceForm = () => {
  const dispatch = useDispatch()
  const { loading, success, error } = useSelector(selectServiceState)
  const [formData, setFormData] = useState(initialState)

  /* ---------- Helpers ---------- */
  const generateLink = (text) =>
    `/services/${text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`

  const isFormValid = useMemo(
    () => formData.title && formData.description && formData.content,
    [formData]
  )

  /* ---------- Handlers ---------- */
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
      ...(name === "title" && { link: generateLink(value) }),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = new FormData()
    payload.append("title", formData.title)
    payload.append("description", formData.description)
    payload.append("article_content", formData.content)
    payload.append("link", formData.link)
    payload.append("display_to_home", formData.showOnHome)

    if (formData.category)
      payload.append("category", formData.category.value)

    if (formData.subcategory)
      payload.append("subcategory", formData.subcategory.value)

    if (formData.bgImage)
      payload.append("bgImage", formData.bgImage)

    dispatch(createService(payload))
  }

  /* ---------- Effects ---------- */
  useEffect(() => {
    if (success) {
      setFormData(initialState)
      dispatch(resetServiceState())
    }
  }, [success, dispatch])

  return (
    <Container fluid="md">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h4 className="mb-1">Create New Service</h4>
              <p className="text-muted mb-4">
                Add service details, content, and visibility settings
              </p>

              {error && (
                <Alert variant="danger">
                  {error.message || "Failed to create service"}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* ---------- CATEGORY ---------- */}
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

                {/* ---------- BASIC INFO ---------- */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Basic Information</h6>

                    <Form.Group className="mb-3">
                      <Form.Label>Service Title *</Form.Label>
                      <Form.Control
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Legal Consultation"
                        disabled={loading}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Auto Generated URL</Form.Label>
                      <Form.Control value={formData.link} disabled />
                      <Form.Text className="text-muted">
                        This link is generated automatically from the title
                      </Form.Text>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Short Description *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Brief summary shown in listings"
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>

                {/* ---------- MEDIA ---------- */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Media</h6>

                    <Form.Group>
                      <Form.Label>Background Image</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        name="bgImage"
                        onChange={handleChange}
                        disabled={loading}
                      />

                      {formData.bgImage && (
                        <img
                          src={URL.createObjectURL(formData.bgImage)}
                          alt="Preview"
                          className="mt-3 rounded"
                          style={{ maxHeight: 120 }}
                        />
                      )}
                    </Form.Group>
                  </Card.Body>
                </Card>

                {/* ---------- CONTENT ---------- */}
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

                {/* ---------- SETTINGS ---------- */}
                <Card className="mb-4">
                  <Card.Body>
                    <h6 className="mb-3">Visibility</h6>
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

                {/* ---------- ACTION ---------- */}
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
  )
}

export default ServiceForm
