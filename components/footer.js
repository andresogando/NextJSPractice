import {Form, Col, Button, Container, } from 'react-bootstrap';
import Link from 'next/link'
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function Footer(){
    return(
        <Container >
            <p>Andres la para</p>
            
            <div className="footer__icons">
               <IconButton> <a href="#"> <TwitterIcon /> </a></IconButton>        
               <IconButton> <a href="#"> <FacebookIcon /> </a></IconButton>        
            </div>
            
            
        </Container>
    )
}


