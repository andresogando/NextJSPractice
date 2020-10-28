import Layout from "../components/layout"
import { Jumbotron, Button } from "react-bootstrap"
import Link from 'next/link'
import { Container,Row, Col } from 'react-bootstrap'
import { Fab } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));




function HomePage() {
    const classes = useStyles();
    return (
       <Layout >
           <Jumbotron>
               <h2>Andres 💯😝</h2>
               <p>
                   TESTING React-Bootstrap Jumbotron 
              </p>
           </Jumbotron>


        <div id="Boton para navegar">
        <Link href="/b/datas"> 
        <Fab variant="extended">
            <NavigationIcon className={classes.extendedIcon} />
            Go to a Table with actual Bitcoin Price and more. 
        </Fab>
        </Link>

        </div>


        
        </Layout>

    )




  }
  
  export default HomePage


