import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

/*const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;*/

const Marginer = styled.div`
  height: 2em;
`;
const styLinks ={
  textDecoration:"none",
  color: "inherit",
  fontSize:"inherit"
};

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () =>{
    setOpen(false)
  }
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
          <LinksWrapper>
          <LinkItem>
            <NavLink to="/" style={styLinks} onClick={closeMenu}>Home</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="Pics" style={styLinks} onClick={closeMenu}>Picture</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="Music" style={styLinks} onClick={closeMenu}>Music</NavLink>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
