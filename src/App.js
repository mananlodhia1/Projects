import './App.css'
import Login from "./components/Login";
import mainPage from "./components/mainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/" component={mainPage}/>
     </Switch>
   </Router>
  );
}

export default App;
