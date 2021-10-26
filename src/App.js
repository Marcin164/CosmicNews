import {BrowserRouter, Switch, Route} from "react-router-dom"
import Article from "./Pages/Article";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/articles/:id" component={Article}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;