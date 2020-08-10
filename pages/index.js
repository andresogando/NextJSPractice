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
       <Layout>
           <Jumbotron>
               <h2>Andres 💯😝</h2>
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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


