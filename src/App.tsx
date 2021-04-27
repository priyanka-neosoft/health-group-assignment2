import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Counter from './components/counter/counter'
import { COUNTER_PAGE, USER_PAGE } from './assets/constant';
import User from './components/user/user';


/**
 * @description  App component.
 * Component used for defining routes in the App
*/

const App:React.FC = () =>{
  return(
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path= {COUNTER_PAGE} component={Counter} ></Route>
          <Route path= {USER_PAGE} component ={User} ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
