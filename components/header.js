import Link from 'next/link';
import {Navbar, FormControl, Button,Nav, Form} from 'react-bootstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

export default function Header(){
    return(
        <div className="header__main">
             <IconButton>  <TelegramIcon  color='secondary' /> </IconButton>
            <img className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2017/04/MTV-Logo.png"
            alt="ellogo"
            ></img>
            <IconButton>  <QuestionAnswerIcon  color='secondary' /> </IconButton>



        </div>
        
    )
}


{/* 
    <Navbar  sticky='top' bg="light" variant="light">
            <Navbar.Brand href="/"><i class="fas fa-home"></i></Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav inline > 
                <Nav.Link   href="/b/datas"> <IconButton>  <TelegramIcon color='secondary' /> </IconButton></Nav.Link>
                <Nav.Link   href="/b/datas"> <IconButton>  <TelegramIcon color='secondary' /> </IconButton></Nav.Link>

            </Nav>
      </Navbar>
*/}