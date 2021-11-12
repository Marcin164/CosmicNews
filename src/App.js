import { BrowserRouter, Switch, Route } from "react-router-dom";
import Article from "./Pages/Article";
import Dashboard from "./Pages/Dashboard";
import { createStore } from "redux";
import allReducers from "./Redux/index.js";
import { Provider } from "react-redux";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("SUBSCRIBED");
});

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/articles/:id" component={Article} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
