import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./components/Overview";
import Detail from "./components/Detail";
import Header from "./components/Header";

// check dees:
// https://stackoverflow.com/questions/51604671/reactjs-how-can-i-implement-pagination-for-react-with-keep-state-when-route-ch

function App() {
  return (
    <>
      <Router>
        <div className="bg-light full-height">
          <Header />
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/detail/:name">
              <Detail />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
