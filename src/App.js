import './App.css';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Personal from './Personal'
import Partner from './Partner'
import Language from './Language'

function App() {
  return (
    <div className="App">
    
    <BrowserRouter> 
    <Switch>
    <Route exact path="/"><Partner/></Route>  
    <Route exact path="/personal" > <Personal /></Route>  
    <Route exact path="/language"  component={Language} />
    </Switch>
    </BrowserRouter>  
    </div>
  );
}

export default App;
