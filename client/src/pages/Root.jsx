import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

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
    <>
      <LinkDiv>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/product'>Product</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cart'>Cart</Link>
      </LinkDiv>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
