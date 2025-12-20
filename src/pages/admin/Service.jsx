import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

// TipTap
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

// Redux
import {
  selectService,
  createService,
  resetServiceState,
} from "../../features/services/serviceSlice";

const Service = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(selectService);

  const [formData, setFormData] = useState({
    category: null,
    subCategory: null,
    pageTitle: "",
    freeText: "",
  });

  /* -----------------------------
     TipTap Editor
  ------------------------------ */
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write service description here...</p>",
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({
        ...prev,
        freeText: editor.getHTML(),
      }));
    },
  });

  /* -----------------------------
     Cleanup Redux State
  ------------------------------ */
  useEffect(() => {
    return () => {
      dispatch(resetServiceState());
    };
  }, [dispatch]);

  /* -----------------------------
     Submit Handler
  ------------------------------ */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      sub_group_id: formData.subCategory?.value,
      name: formData.pageTitle,
      slug: formData.pageTitle
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-"),
      description: formData.freeText,
    };
    dispatch(createService(payload));
  };

  /* -----------------------------
     Dropdown Options (Searchable)
  ------------------------------ */
  const categoryOptions = [
    { value: 1, label: "Finance" },
    { value: 2, label: "Registration" },
    { value: 3, label: "Tax & Compliance" },
  ];

  const subCategoryOptions = [
    { value: 1, label: "Microfinance" },
    { value: 2, label: "Loan Services" },
    { value: 3, label: "GST Filing" },
  ];

  const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="border rounded mb-2 p-2 d-flex flex-wrap gap-2 bg-light">
      <Button
        size="sm"
        variant={editor.isActive("bold") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </Button>

      <Button
        size="sm"
        variant={editor.isActive("italic") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </Button>

      <Button
        size="sm"
        variant={editor.isActive("underline") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </Button>

      <Button
        size="sm"
        variant={editor.isActive("heading", { level: 2 }) ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>

      <Button
        size="sm"
        variant={editor.isActive("bulletList") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • List
      </Button>

      <Button
        size="sm"
        variant={editor.isActive("orderedList") ? "dark" : "outline-dark"}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. List
      </Button>

      <Button
        size="sm"
        variant="outline-dark"
        onClick={() => {
          const url = window.prompt("Enter URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        🔗 Link
      </Button>

      <Button
        size="sm"
        variant="outline-danger"
        onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
      >
        Clear
      </Button>
    </div>
  );
};

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="mb-4">Add Service Details</h5>

              <Form onSubmit={handleSubmit}>
                {/* Alerts */}
                {error && <Alert variant="danger">{error}</Alert>}
                {success && (
                  <Alert variant="success">
                    Service created successfully
                  </Alert>
                )}

                {/* Category (Searchable) */}
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Select
                    options={categoryOptions}
                    placeholder="Search & select category"
                    isSearchable
                    onChange={(val) =>
                      setFormData({ ...formData, category: val })
                    }
                  />
                </Form.Group>

                {/* Sub Category (Searchable) */}
                <Form.Group className="mb-3">
                  <Form.Label>Sub Category</Form.Label>
                  <Select
                    options={subCategoryOptions}
                    placeholder="Search & select sub category"
                    isSearchable
                    onChange={(val) =>
                      setFormData({ ...formData, subCategory: val })
                    }
                  />
                </Form.Group>

                {/* Service Title */}
                <Form.Group className="mb-3">
                  <Form.Label>Service Title</Form.Label>
                  <Form.Control
                    value={formData.pageTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pageTitle: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>

                {/* Rich Text Editor */}
                <Form.Group className="mb-4">
                  <Form.Label>Description</Form.Label>
                  <EditorToolbar editor={editor} />
                  <div
                    className="border rounded p-2 bg-white"
                    style={{ minHeight: "200px" }}
                  >
                    <EditorContent editor={editor} />
                  </div>
                </Form.Group>

                {/* Submit */}
                <Button variant="dark" type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Add Service"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
