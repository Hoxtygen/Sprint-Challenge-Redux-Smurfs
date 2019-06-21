import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
      <HeaderWrapper>
        <nav>
          <ul>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/smurf-form">New smurf</NavLink></li>
          </ul>
        </nav>
      </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header `
  display: flex;
  justify-content: center;
  background-color: #222;
  color: #f2f2f2;
  height: 50px;
  align-items: center;

  nav   {
    display: flex;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-content: space-between;
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 2rem;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
  }
`

export default Header
