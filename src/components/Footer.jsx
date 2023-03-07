import {
  Facebook,
  Instagram,
  MailLockOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1 1 30%;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1 1 30%;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Elkene.</Logo>
        <Desc>
          Fashion is the reflection of change in our lifestyle. It is the art of
          expressing your sense of beauty through clothes.The word fashion is
          derived from the French word “façon” which means “manner, way, style”.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '15px' }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '15px' }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailLockOutlined style={{ marginRight: '15px' }} />
          contact@Elkene.sad
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
