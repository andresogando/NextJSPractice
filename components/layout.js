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
      <script src="https://kit.fontawesome.com/df42958a46.js" crossorigin="anonymous"></script>
        <script src="/__/firebase/7.17.2/firebase-app.js"></script>

        <script src="/__/firebase/7.17.2/firebase-analytics.js"></script>

        <script src="/__/firebase/init.js"></script>

       

        <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

        <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-performance.js"></script>

  

        <script>
        var firebaseConfig = {
            // ...
        };

        firebase.initializeApp(firebaseConfig);

        
        var perf = firebase.performance();
        </script>


      </>
      
      )
    }