import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  text-decoration: none; 
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const styLinks ={
  textDecoration:"none",
  color: "inherit",
  fontSize:"inherit"
};

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <NavLink to="/" style={styLinks}>Home</NavLink>
        </LinkItem>
        <LinkItem>
            <NavLink to="Pics" style={styLinks}>Picture</NavLink>
        </LinkItem>
        <LinkItem>
            <NavLink to="Music" style={styLinks}>Music</NavLink>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
 
  );
}
