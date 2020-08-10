import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header'
import {Container} from 'react-bootstrap'
import Link from 'next/link';





export default function Layout({children}) {
    return(
        <>
        
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"></link> 
     
        <Meta />
        <Header />
        <div className='layout__main'>
            <Container fluid="sm">
                <main>{children}
                                    
                   
                </main>        
            </Container>
        </div>

      <Footer />
      <script src="https://kit.fontawesome.com/df42958a46.js" crossorigin="anonymous"></script>

      </>
      )
    }