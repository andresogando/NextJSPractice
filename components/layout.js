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
                        <Link href="/"><a><i class="fas fa-chevron-left"></i> Go Back!!</a></Link>
                        
                    </div>

                    
                    
                </main>
                    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>



                    <script>
                    var firebaseConfig = {
                        "projectId": "terminal-a343e",
                        "appId": "1:1009676514852:web:34079a85af81b08336cab1",
                        "databaseURL": "https://terminal-a343e.firebaseio.com",
                        "storageBucket": "terminal-a343e.appspot.com",
                        "locationId": "us-central",
                        "apiKey": "AIzaSyCObLCmHv7EsOuXc0ToKoTyZtEv4Lk0bMg",
                        "authDomain": "terminal-a343e.firebaseapp.com",
                        "messagingSenderId": "1009676514852",
                        "measurementId": "G-KF2EB2XNN4"
                    };
                    firebase.initializeApp(firebaseConfig);
                    </script>
                
            </Container>
            
        </div>
        <hr/>
      <Footer />
      <script src="https://kit.fontawesome.com/df42958a46.js" crossorigin="anonymous"></script>
     


      </>
      
      )
    }