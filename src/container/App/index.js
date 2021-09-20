import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import theme from "../../common/Theme";
import Taskboard from "../Taskboard";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import GlobalLoading from "../../components/GlobalLoading";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
