/*
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppBarElement } from "./AppBarElement";
import logo from "../../assets/logo.png";
import {
  NavBarCenter,
  NavBarLogo,
  NavBarMenu,
  NavBarRight,
  StyledNavBar,
} from "./styles";

export function AppBar(): React.ReactElement {
  return (
    <StyledNavBar>
      <Navbar.Brand>
        <Link to="/">
          <NavBarLogo src={logo} alt={"Logo"} />
        </Link>
      </Navbar.Brand>

      <NavBarMenu>
        <NavBarCenter>
          <AppBarElement title="Feed" to="/feed" key="feed" />
          <AppBarElement title="Accounts" to="/accounts" key="account" />


        </NavBarCenter>
      </NavBarMenu>
        <NavBarRight>    <AppBarElement title="Help" to="/help" key="help" /></NavBarRight>
    </StyledNavBar>
  );
}
