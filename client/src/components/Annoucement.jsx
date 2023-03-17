import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 50px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  ${mobile({ padding: '0 20px' })}
`;

const Annoucement = () => {
  return <Container>Super Deal ! Free Shipping on Order over $50 !</Container>;
};

export default Annoucement;
