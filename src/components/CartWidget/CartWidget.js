import cart from './assets/cart.svg';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CartWidget.css';

const CartWidget = () => {
        const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a className="cursor-pointer cantidad" onClick={handleShow}>
                <img src={cart} alt='carrito-logo' width='40' height='40'/>
                <span className='cuenta'>0</span>
            </a>

            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    No tienes ningun item actualmente
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default CartWidget;

