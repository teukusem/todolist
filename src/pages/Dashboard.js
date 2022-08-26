import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import Trash from "../assets/trash.png";
import { useNavigate } from "react-router-dom";
import Delete from "../assets/delete.png";

function Dashboard() {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-3">
          <Col>
            <h3 className="fw-bold">Activity</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="info" className="text-light rounded-pill px-3">
              + Tambah
            </Button>
          </Col>
        </Row>
        {/* Card Dashboard */}
        <Row className="mt-4">
          <Col lg={3}>
            <Card
              style={{
                width: "14rem",
                height: "235px",
                border: "none",
                boxShadow: "0px 6px 10px rgb(0 0 0 / 10%)",
                borderRadius: "12px",
              }}
            >
              <Card.Body onClick={() => navigate("/item-list")}>
                <Card.Title className="fs-6 fw-bold">
                  Daftar Belanja Bulanan
                </Card.Title>
              </Card.Body>
              <Card.Body>
                <div className="bottomCard">
                  <p className="bottomComponent">5 Oktober 2021</p>
                  <img src={Trash} height="18px" onClick={handleShowDelete} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Body className="d-flex align-items-center flex-column justify-content-center">
          <img src={Delete} height="56px" width="63px" />
          <p className="fw-bold text-center">
            Apakah anda yakin akan menghapus activity ?
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="light"
            className=" rounded-pill px-5"
            onClick={handleCloseDelete}
          >
            Batal
          </Button>
          <Button
            variant="danger"
            className="text-light rounded-pill px-5"
            onClick={handleCloseDelete}
          >
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;
