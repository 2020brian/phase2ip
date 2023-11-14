import { useEffect,useState } from "react";



    return(
        <table>
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>Cusomer Name</th>
                    <th>Address</th>
                    <th>Amount</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {details.map(order => (
                    <tr key ={order.id}>
                        <td>{order.date}</td>
                        <td>{order.name}</td>
                        <td>{order.address}</td>
                        <td>{order.amount.total} USDs</td>
                        <td><button onClick={handleTransactionApproved} >Approve Transaction</button></td>
                        <td><button onClick={() =>handleTransactionDeclined(order.id)}>Delete Transaction</button></td>
                        
                    </tr>
                        
                    ))}
                    

            </tbody>
        </table>
    )
}
export default Checkout;
