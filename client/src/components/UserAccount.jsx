import React from "react";
import { useLocation } from "react-router-dom";

const UserAccount = () => {
  const location = useLocation();
  const user = location.state?.user;
  const lastLogin = user.loginHistory.slice(-2, -1)[0];
  console.log(user);
  return (
    <div id='userAcct'>
      <h5>Welcome {user.name}</h5>
      <br />
      <p>Last Login: {lastLogin}</p>
      <h6>Order History</h6>
      <table
        id="myTable"
        style={{ fontFamily: "sans-serif", fontSize: "small" }}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {user.orderHistory ? user.orderHistory.slice().reverse().map((item, index) => (
          <tr>
            <td>{item.Item_name}</td>
            <td>{item.Quantity}</td>
            <td>{item.Price} {item.currency}</td>
            <td>{item.paymentStatus}</td>
            <td>{item.date}</td>
          </tr>
        )) : <></>}
        </tbody>
      </table>
    </div>
  )
}

export default UserAccount;
