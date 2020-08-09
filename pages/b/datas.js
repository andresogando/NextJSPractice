import {Table} from 'react-bootstrap'
import Layout from '../../components/layout';






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
                    <td></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
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


