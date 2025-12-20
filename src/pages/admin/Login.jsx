import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, selectAuth, resetAuthState } from "../../features/authSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(selectAuth);

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin({ email, password }));
  };

  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  useEffect(() => {
  const token = Cookies.get("authToken");
  if (token) {
    navigate("/admin", { replace: true });
  }
}, [navigate]);

useEffect(() => {
  if (success) {
    navigate("/admin", { replace: true });
  }
}, [success, navigate]);


  return (
    <Container fluid className="min-vh-100 d-flex align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="border-0">
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">Login successful</Alert>}

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="shadow-none"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="shadow-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Login"}
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <p className="text-center mt-3 text-muted">
            © {new Date().getFullYear()} Admin Panel
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
