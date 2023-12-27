import React from "react";
// there are two ways to import components fro react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const RBLayout = () => {
  return (
    <>
      <h3>RB layout</h3>
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 bg-primary">
            {"Sample content".repeat(50)}
          </div>
          <div className="col-12 col-md-6 bg-success">
            {"Sample content".repeat(100)}
          </div>
          <div className="col-12 col-md-3 bg-warning">
            {"Sample content".repeat(50)}
          </div>
        </div>
      </section>
      <hr />

      <Container fluid>
        <Row>
          <Col xs={12} md={3} bg-primary className="bg-primary">
            {"Sample content".repeat(50)}
          </Col>
          <Col xs={12} md={6} bg-success className="bg-success">
            {"Sample content".repeat(100)}
          </Col>
          <Col xs={12} md={3} bg-warning className="bg-danger">
            {"Sample content".repeat(50)}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RBLayout;
