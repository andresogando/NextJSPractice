import {Form, Col, Button, Container, } from 'react-bootstrap';
import Link from 'next/link'



export default function Footer(){
    return(
        <Container >
            <p>Andres la para</p>
            
            <ul>
            <Link href="/"><li><p><i class="fab fa-twitter"></i></p> </li></Link> 
                <li><p><i class="fab fa-facebook-f"></i></p></li>
            </ul>
            
        </Container>
    )
}


