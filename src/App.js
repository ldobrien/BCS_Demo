import "./App.css";
import Dogs from "./components/Dogs";
import Counter from "./components/Counter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Dogs} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
