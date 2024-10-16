import React, { useState } from 'react'; // Corrected import statement
import { Modal, Button, Carousel} from 'react-bootstrap'; // Corrected import statement

function Room({ room }) {
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
      <img src={room.imageurls[0]} className='smallimg' alt={room.name} />
      </div>
      <div className='col-md-7'>
        <h1>{room.name}</h1>
      <b>
        <p>Max count : {room.maxcount}</p>
        <p>Phone number: {room.phonenumber}</p>
        <p>type : {room.type}</p>
      </b>
      </div>
      <div style = {{float: "right"}}>
        <button className='btn btn-primary'onClick={handleShow}>View Details</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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
