import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/style/GlobalStyle";
import AllRoutes from "./pages/AllRoutes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <AllRoutes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
