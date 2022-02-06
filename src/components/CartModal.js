import classes from './CartModal.module.css'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';
const CartModal = () => {
    const [show, setShow] = useState(true);
const history = useHistory();
    function directToMain(){
        history.replace("/Main");
        setShow(false);
    }
    return (
    <div className={classes.modalContainer}>
       <>
      <Modal show={show} onBackdropClick={directToMain} onHide={directToMain}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">Here's your cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={directToMain}>
            Close
          </Button>
          <Button variant="primary" onClick={directToMain}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
        )
}
export default CartModal;