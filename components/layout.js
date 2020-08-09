import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header'
import {Container} from 'react-bootstrap'
import Link from 'next/link';





export default function Layout({children}) {
    return(
        <>

        <Meta />
        <Header />
        <div>
            <Container fluid="sm">
                <main>{children}
                    <div>
                        <Link href="/"><a><i class="fas fa-chevron-left"></i> Go Back!</a></Link>
                    </div>

                    
                    
                </main>
                
            </Container>
            
        </div>
        <hr/>
      <Footer />
      
      </>
      )
    }