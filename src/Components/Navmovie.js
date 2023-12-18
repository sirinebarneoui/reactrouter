import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from 'react-router-dom';
   const Navmovie=()=>{
    return(
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link To='/'>Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link To='/Listemovie'>Movies</Link></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
       

    </div>
    )
}
export default Navmovie;