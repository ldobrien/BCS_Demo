import "./App.css";
import Counter from "./components/Counter";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
