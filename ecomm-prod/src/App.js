import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Products from './Container/Products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path= '/' component={Products}></Route>
        <Route></Route>
      </Switch>
      
    </div>
  );
}

export default withRouter(App);
