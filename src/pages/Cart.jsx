import styled from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButtom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparant'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Botton = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButtom>CONTINUE SHOPPING</TopButtom>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(2)</TopText>
          </TopTexts>
          <TopButtom type="filled">CHECK NOW</TopButtom>
        </Top>

        <Botton></Botton>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
