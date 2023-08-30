import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import NewPizzaPanel from "./containers/NewPizzaPanel/NewPizzaPanel";
import { StyledPanelContenedor } from "./componentes/PanelContenedor/StyledPanelContenedor";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Tabs from "./containers/Tabs";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Provider store={store}>
      <Tabs></Tabs>
    </Provider>
  );
}

export default App;
