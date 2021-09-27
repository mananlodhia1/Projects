import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Login}/>
     </Switch>
   </Router>
  );
}

export default App;
