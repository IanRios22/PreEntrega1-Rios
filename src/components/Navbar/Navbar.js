import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'


const CollapsibleExample = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-top bg-body-secondary">
            <Container className='container'>
                <Navbar.Brand href="#" className='titulo'>
                    <img
                        src='img/logo.png'
                        alt="logo"
                        width="40"
                        height="40"
                        className='d-inline-block rounded-circle me-2'
                    />
                    TechSTORE
                </Navbar.Brand>

                <Nav className="d-flex flex-row ">
                    <Nav.Link href="#video" className="items m-2 p-2">Videojuegos</Nav.Link>
                    <Nav.Link href="#acces" className="items m-2 p-2">Accesorios</Nav.Link>
                </Nav>

                <CartWidget/>
            </Container>
        </Navbar>
    );
}
export default CollapsibleExample;