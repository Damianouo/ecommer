import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PageTransition from '../components/style/PageTransition';

const LinkDiv = styled.div`
  display: flex;
  background-color: white;
  padding: 0px 50px;
  a {
    text-decoration: none;
    color: black;
    font-size: 32px;
    transition: all 300ms ease;
    padding: 10px 20px;
    &:hover {
      color: white;
      background-color: black;
    }
  }
`;

const Root = () => {
  return (
    <PageTransition>
      <LinkDiv>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/test">Testttt</NavLink>
      </LinkDiv>
      <div id="detail">
        <Outlet />
      </div>
    </PageTransition>
  );
};

export default Root;
