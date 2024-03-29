import styled from 'styled-components';
import RegisterBg from '../assets/registerBg.jpg';
import { mobile } from '../responsive';
import PageTransition from '../components/style/PageTransition';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${RegisterBg});

  background-size: cover;
  background-position: 0 60%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1 1 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 16px;
`;

const Agreement = styled.span`
  margin: 30px 10px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: white;
  font-size: 20px;
  font-weight: 500;
  ${mobile({ padding: '10px 15px' })}
`;

const Register = () => {
  return (
    <PageTransition>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creatin an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
          </Form>
        </Wrapper>
      </Container>
    </PageTransition>
  );
};

export default Register;
