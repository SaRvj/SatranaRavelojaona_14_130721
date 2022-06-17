import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4em 4em 0 4em;
  padding: 1em 2em;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 1em 1em 0 0;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
    height: 50px;
  }
`;

const NavItem = styled(Link)`
  font-weight: bold;
  padding: 0.5em 1em;
  transition: all 0.3s;
  :hover {
    color: #fff;
    border-radius: 0.5em;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src="./logo-hrnet-500.png" alt="HRnet logo" />
      </HeaderLogo>
      <NavItem to="/employee-list">View Current Employees</NavItem>
    </HeaderContainer>
  );
}
