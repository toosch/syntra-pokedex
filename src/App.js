import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Overview from "./components/Overview";
import Detail from "./components/Detail";
import Header from "./components/Header";

import Container from "react-bootstrap/Container";

// check dees:
// https://stackoverflow.com/questions/51604671/reactjs-how-can-i-implement-pagination-for-react-with-keep-state-when-route-ch

function App() {
  return (
    <>
      <Router>
        <Container className="container-fluid full-height px-2 mw-100">
          <Header />
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/detail/:name">
              <Detail />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
