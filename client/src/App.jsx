import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './pages/AllRoutes';
import GlobalStyle from './components/style/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AllRoutes />
    </BrowserRouter>
  );
};

export default App;
