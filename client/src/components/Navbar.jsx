import {
  Search,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//#region Styled-Component
const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
  --font-size:18px;
  --font-weight: 500;
`;
const Wrapper = styled.div`
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;

//'Left side
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
  font-size: var(--font-size);
  border: none;
  ${mobile({ width: "50px" })}
`;

//'Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

//'Right side
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ flex: "2", justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
//#endregion

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <Search style={{ color: "gray", fontSize: "var(--font-size)" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Elkene.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>

          <NavLink
            to='/cart'
            style={{ textDecoration: "none", color: "black" }}
          >
            {({ isActive }) => (
              <MenuItem>
                <Badge badgeContent={quantity} color='primary'>
                  {isActive ? (
                    <ShoppingCart style={{ fontSize: "40px)" }} />
                  ) : (
                    <ShoppingCartOutlined style={{ fontSize: "40px)" }} />
                  )}
                </Badge>
              </MenuItem>
            )}
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
