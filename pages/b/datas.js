import {Table} from 'react-bootstrap'
import Layout from '../../components/layout';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import IconButton from '@material-ui/core/IconButton';






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
                    <td><a href='https://twitter.com/andresyrn'><i class="fab fa-twitter"></i></a></td>
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
        </Layout>

    )
}








datas.getInitialProps = async(ctx) => {
    const res = await fetch('https://api.coinbase.com/v2/prices/btc-usd/spot')
    const json = await res.json()
    return {  currency: json.data.currency, rates: json.data.amount  }

}

export default datas;


