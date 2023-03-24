import { createGlobalStyle } from 'styled-components';
import BodyBg from '../../assets/lauraChouette.jpg';

const GlobalStyle = createGlobalStyle`

  #root::before{
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
      ),
      url(${BodyBg});
      background-size:cover;
      z-index:-1;
    }
    /* background-image:url(${BodyBg});
    opacity: 0.6; */
    `;

export default GlobalStyle;
