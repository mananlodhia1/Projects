// import './App.css'
import './components/stylesheet/App.css'
import Login from "./components/Login";
import Login2 from "./components/sample/Login2";
import mainPage from "./components/mainPage";
import main2 from "./components/sample/main2";
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
       <Route exact path="/login" component={Login2}/>
       <Route exact path="/" component={main2}/>
     </Switch>
   </Router>
  );
}

export default App;
