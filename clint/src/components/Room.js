import React, { useState } from "react"; // Corrected import statement
import { Modal, Button, Carousel } from "react-bootstrap"; // Corrected import statement
import { Link } from "react-router-dom";

function Room({ room, fromdate, todate}) {
  const [show, setShow] = useState(false); // Fixed useState syntax

  const handleClose = () => {
    setShow(false); // Close handler
  };

  const handleShow = () => {
    setShow(true); // Show handler
  };

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" alt={room.name} />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <b>
          <p>Max count : {room.maxcount}</p>
          <p>Phone number: {room.phonenumber}</p>
          <p>type : {room.type}</p>
        </b>
      </div>
      <div style={{ float: "right" }}>
        <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
          <button className="btn btn-primary me-2">book now</button>
        </Link>
        <button className="btn btn-primary me-2" onClick={handleShow}>
          View Details
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
