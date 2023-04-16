import styled from "styled-components";
import PageTransition from "../components/style/PageTransition";
import Navbar from "../components/Navbar";
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lavenderblush;
`;

const Test = () => {
  return (
    <PageTransition>
      <Container>
        <Navbar />
      </Container>
    </PageTransition>
  );
};

export default Test;
