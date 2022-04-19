import React from "react";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { Link } from "react-router-dom";

function Homepage() {
  const isLoggedIn = useContext(LoginContext);
  const loginContext = useContext(LoginContext);
  console.log(loginContext);

  // const loggedInUser = {
  //     ccNumber: 0,
  //     ccName: "Dummy Card",
  //     userName: "Guest User",
  //     userId: "guest",
  //     availableRedeemPoints: 0,
  //     totalRewardsGained: 0
  // }

  return (
    <div className="homepage container">
      <h2>Welcome to SmartBank credit card</h2>
      {isLoggedIn ? (
        <div className="user-detail">
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Credit Card Number</th>
                  <th>Card Name</th>
                  <th>User Name</th>
                  <th>Available Points</th>
                  <th>
                    Total Rewards Gained (<i className="fas fa-rupee-sign"></i>)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{loginContext.loggedInUser.ccNumber}</td>
                  <td>{loginContext.loggedInUser.ccName}</td>
                  <td>{loginContext.loggedInUser.userName}</td>
                  <td>{loginContext.loggedInUser.availableRedeemPoints}</td>
                  <td>{loginContext.loggedInUser.totalRewardsGained}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          Please Sign in to redeem your points. &nbsp; &nbsp;
          <Link className="btn btn-primary" to="/login">
            <i className="fas fa-user" />
            &nbsp; Sign in
          </Link>
        </div>
      )}
    </div>
  );
}

export default Homepage;
