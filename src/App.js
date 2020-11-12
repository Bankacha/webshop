import './App.css';
import Home from './views/Home';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
// {/* <link
//   rel="stylesheet"
//   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//   integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
//   crossorigin="anonymous"
// /> */}
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Layout>
      <Switch>

        <Route path="/" component={Home}></Route>

      </Switch>
    </Layout>
  </Router>

  );
}

export default App;
