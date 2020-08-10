import {Table} from 'react-bootstrap'
import Layout from '../../components/layout';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';



function datas({data,currency,rates}){

    return(
         <Layout>
            <div className="container"> 
                <h2>Datas</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{currency}</td>
                    <td>{rates}</td>
                    <td><a href='#'><i class="fab fa-bitcoin"></i></a></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Andres</td>
                    <td>Vale Demasiado</td>
                    <td><IconButton> <a href="https://twitter.com/Andresyrn"> <TwitterIcon /> </a></IconButton></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>tu </td>
                    <td>jeva ------> </td>
                    <td><a href='#'><IconButton>  <LocalAirportIcon /> </IconButton> </a></td>
                    </tr>
                </tbody>
            </Table>
                
        </div>
                    <div>
                        <Link href="/"><a><i class="fas fa-chevron-left"></i> Go Back!!  </a></Link>  
                    </div>

        </Layout>

    )
}








datas.getInitialProps = async(ctx) => {
    const res = await fetch('https://api.coinbase.com/v2/prices/btc-usd/spot')
    const json = await res.json()  
    return {  currency: json.data.currency, rates: json.data.amount  }

}

export default datas;


