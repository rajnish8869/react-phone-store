import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark p-sm-10">
                
            <Link to="/">
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                <Link to="/"className="nav-link">
                    <div className="productBtn px-3 py-1">Products</div>
                </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background-color: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    
}
.productBtn {
    border: 2px solid white;
    border-radius: 16px;
}
`
