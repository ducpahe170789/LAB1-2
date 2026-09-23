import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
function Headers(){
    return(
        <Navbar expand="lg" className="bg-black" >
      <Container fluid>

        <Navbar.Brand href="#" className="text-light">
         <h1> SHOP FASHION</h1> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

<Navbar.Collapse id="navbarScroll">
 <div className="d-flex justify-content-end align-items-center w-100 gap-5">

    <Nav className="fs-4">
      <Nav.Link className="text-light">Home</Nav.Link>
      <Nav.Link className="text-light">Products</Nav.Link>
      <Nav.Link className="text-light">Men</Nav.Link>
      <Nav.Link className="text-light">Women</Nav.Link>
      <Nav.Link className="text-light">Contact</Nav.Link>
      
      


    </Nav>

    <Form className="d-flex position-relative">
      <Form.Control
        type="search"
        placeholder="Search"
        className="pe-5"
         style={{
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'white',
        '--bs-body-color': 'white',
        '--bs-secondary-color': 'white',
  }}
      />

      <div className="position-absolute top-0 end-0 h-100 bg-danger px-2 d-flex align-items-center">
        <CiSearch size={25} />
      </div>
    </Form>

  </div>
</Navbar.Collapse>
      </Container>
    </Navbar>
    );
}export default Headers