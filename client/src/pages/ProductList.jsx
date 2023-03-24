import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import PageTransition from '../components/style/PageTransition';

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: white;
  padding-top: 20px;
`;

const Title = styled.h1`
  margin: 0 30px 20px 30px;
  ${mobile({ margin: '20px' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
const Filter = styled.div`
  margin: 10px 20px;
  ${mobile({ margin: '0', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: '0' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0' })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <PageTransition>
      <Container>
        <Annoucement />
        <Navbar />
        <Wrapper>
          <Title>Dresses</Title>
          <FilterContainer>
            <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select defaultValue="color">
                <Option disabled value="color">
                  Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select defaultValue="size">
                <Option disabled value="size">
                  Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select defaultValue="newest">
                <Option value="newest">Newest</Option>
                <Option>Price(asc)</Option>
                <Option>Price(desc)</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <Products />
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </PageTransition>
  );
};

export default ProductList;
