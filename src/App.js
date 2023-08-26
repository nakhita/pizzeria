import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import NewPizzaPanel from "./containers/NewPizzaPanel/NewPizzaPanel";

function App() {
  return (
    <Provider store={store}>
      <NewPizzaPanel></NewPizzaPanel>
    </Provider>
  );
}

export default App;
