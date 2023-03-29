import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import PageTransition from "../components/style/PageTransition";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: white;
  padding-top: 20px;
`;

const Title = styled.h1`
  margin: 0 30px 20px 30px;
  ${mobile({ margin: "20px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
const Filter = styled.div`
  margin: 10px 20px;
  ${mobile({ margin: "0", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  //'Get {cat, filters, sort} value, and pass to <Products />
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  return (
    <PageTransition>
      <Container>
        <Annoucement />
        <Navbar />
        <Wrapper>
          <Title>{cat}</Title>
          <FilterContainer>
            <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select defaultValue='color' name='color' onChange={handleFilter}>
                <Option disabled value='color'>
                  Color
                </Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
              </Select>
              <Select defaultValue='size' name='size' onChange={handleFilter}>
                <Option disabled value='size'>
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
              <Select defaultValue='newest' onChange={handleSort}>
                <Option value='newest'>Newest</Option>
                <Option value='asc'>Price(asc)</Option>
                <Option value='desc'>Price(desc)</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <Products cat={cat} filters={filters} sort={sort} />
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </PageTransition>
  );
};

export default ProductList;
