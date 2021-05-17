import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Productlisting from "./components/Productlisting";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Productlisting} />
          <Route path="/products/:productid" exact component={ProductDetail} />
          <Route>404 not found !</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
