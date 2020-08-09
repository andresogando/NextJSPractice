import Link from 'next/link';
import {Navbar, FormControl, Button,Nav, Form} from 'react-bootstrap';


export default function Header(){
    return(
        <Navbar  sticky='top' bg="light" variant="light">
            <Navbar.Brand href="/"><i class="fas fa-home"></i></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/b/datas">Datas</Nav.Link>
            </Nav>
      </Navbar>
    )
}


