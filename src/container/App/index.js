import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import theme from "../../common/Theme";
import Taskboard from "../Taskboard";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
