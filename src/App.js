import React ,{Component} from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css"

import Nav from "./Nav";
import Home from"./Home";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Login from "./Login";
import Offers from "./Offers";
import Flipkartplus from "./Flipkatplus";
import Photo from "./Photo";

class App extends Component{
  render(){
    return(
      <div className='main'>
        <Router>
        <Nav/>
          <Switch>
            <Route   path="/Home" component={Home}/>
            <Route path="/Flipkartplus" component={Flipkartplus}/>
            <Route  path="/Aboutme" component={Aboutme}/>
            <Route path="/Login" component={Login}/>
            <Route  path="/Offers" component={Offers}/>
            <Route path="/Contact" component={Contact}/> 
          </Switch>
        </Router>
        
      </div>
    )
  }
}
export default App;