import styled from "styled-components";
import LoginBg from "../assets/LoginBg.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${LoginBg});

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-10%);
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1 1 40%;
  margin: 20px 0px;
  padding: 10px;
  font-size: 16px;
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
`;

const Link = styled.a`
  margin-top: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
