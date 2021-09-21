import './Components/Search.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Components/search.js";


function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Search}/>
     </Switch>
   </Router>
  );
}

export default App;
