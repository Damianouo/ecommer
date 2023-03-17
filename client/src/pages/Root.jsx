import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LinkDiv = styled.div`
  display: flex;
  /* justify-content: space-around; */
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
  const [selectedPage, setSelectedPage] = useState('home');
  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };
  return (
    <>
      <LinkDiv>
        <Link to="/">Home</Link>
        <Link
          to="/productlist"
          onClick={() => {
            handleSelectPage('productlist');
          }}
        >
          Productlist
        </Link>
        <Link to="/product">Product</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </LinkDiv>
      <div id="detail">
        <Outlet selectedPage={selectedPage} />
      </div>
    </>
  );
};

export default Root;
