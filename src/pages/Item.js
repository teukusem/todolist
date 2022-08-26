import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Form,
  Modal,
} from "react-bootstrap";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/edit.png";
import Trash from "../assets/trash.png";
import Delete from "../assets/delete.png";

function Item() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5">
          <Col className="d-flex">
            <img src={Back} height="32px" onClick={() => navigate("/")} />
            <h3 className="fw-bold">New Activity</h3>
            <img src={Edit} height="15px" className="ms-3" />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant="info"
              className="text-light rounded-pill px-3"
              onClick={handleShow}
            >
              + Tambah
            </Button>
          </Col>
        </Row>

        <ListGroup className="mt-3">
          <ListGroup.Item style={{ height: "80px" }}>
            <div className="mt-3 d-flex">
              <div className="d-flex">
                <Form.Check
                // type={type}
                // id={`default-${type}`}
                // label={`default ${type}`}
                />
                <div
                  className="mt-2 ms-3"
                  style={{
                    borderRadius: "50px",
                    height: "10px",
                    width: "10px",
                    backgroundColor: "red",
                  }}
                ></div>

                <span className="ms-3 fw-bold">Telur Ayam</span>
                <img src={Edit} height="13px" className="ms-3" />
              </div>
              <div className="ms-auto">
                <img src={Trash} height="18px" onClick={handleShowDelete} />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Tambah List Item </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nama List Item</p>
          <Form>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Tambahkan Item list"
            />
            <p className="mt-3">Priority :</p>
            <select
              aria-label="Default select example"
              style={{ border: "none" }}
            >
              <option>Pilih Priority</option>
              <option value="veryHigh">Very High</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="veryLow">Very Low</option>
            </select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="info"
            className="text-light rounded-pill px-3"
            onClick={handleClose}
          >
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

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

export default Item;
