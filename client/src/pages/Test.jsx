import styled from 'styled-components';
import PageTransition from '../components/style/PageTransition';
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lavenderblush;
`;

const Test = () => {
  return (
    <PageTransition>
      <Container></Container>
    </PageTransition>
  );
};

export default Test;
