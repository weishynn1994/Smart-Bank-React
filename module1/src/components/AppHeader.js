import React, { useContext, useEffect } from "react";
import { Routes, Route, Link, useHistory } from "react-router-dom";
import "../styles/AppHeader.css";
import AppRoute from "../AppRoutes";
import { CartContext } from "../contexts/CartContext";
import { LoginContext } from "../contexts/LoginContext";

function AppHeader() {
  const loginContext = useContext(LoginContext);
  const {isLoggedIn} = useContext(LoginContext);
  console.log(isLoggedIn);

  let history = useHistory();
  const { cartCount } = useContext(CartContext);
  const logoutUser = () => {
    loginContext.logoutUser();
    history.push("/logout");
  };

  return (
    <div className="app-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-header fixed-top">
        <Link className="navbar-brand" to="/">
          SmartBank Credit Card
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item navbar-link active">
              {/* Provide Homepage routing link */}
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item navbar-link">
              {/* Provide Rewards routing link */}
              <Link className="btn btn-success" to="/rewards">
                Rewards Catalogue
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="header-right">
              {/* Provide cart routing link */}
              <Link type="button" className="btn btn-success" to="/cart">
                <i className="fas fa-shopping-cart" />
                &nbsp; My Cart &nbsp;
                <span className="badge badge-light">{cartCount}</span>
                <span className="sr-only">cart items</span>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          {isLoggedIn ? (
            <div className="header-right">
              <Link type="button" className="btn btn-success" to="/">
                <i className="fas fa-user" />
                &nbsp; Welcome{" "}
                {loginContext.loggedInUser.userName == ""
                  ? " Guest"
                  : loginContext.loggedInUser.userName}
                <span className="sr-only">logged in user</span>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        
        {
                        isLoggedIn ? (
                            <button className="btn btn-dark" onClick={logoutUser}>
                                <i className="fas fa-sign-out-alt" />&nbsp; Log Out

                            </button>
                        )
                            :
                            (
                                <Link className="btn btn-dark" to="/login">
                                    <i className="fas fa-sign-in-alt" />&nbsp; Sign in

                                </Link>
                            )
                    }
        
        </div>
      </nav>

      {/* 
                Routing configuration to different components
            */}
      <AppRoute />
    </div>
  );
}

export default AppHeader;
