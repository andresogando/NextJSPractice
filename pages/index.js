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
                   Andrés es el final una maldita grasa caribeña ye 
              </p>
           </Jumbotron>


        <div id="Boton para navegar">
        <Link href="/b/datas"> 
        <Fab variant="extended">
            <NavigationIcon className={classes.extendedIcon} />
                Que Grasa Vale 🔥
        </Fab>
        </Link>

        </div>


        
        </Layout>

    )




  }
  
  export default HomePage


