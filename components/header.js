import Link from 'next/link';
import {Navbar, FormControl, Button,Nav, Form} from 'react-bootstrap';


export default function Header(){
    return(
        <Navbar  sticky='top' bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/b/datas">Datas</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link><i class="fas fa-home"></i></Nav.Link>
            </Nav>
      </Navbar>
    )
}


