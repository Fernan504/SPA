import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
//import Cuerpo from './components/Layouts/Cuerpo';
import Login from "./components/Pages/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';

function App() {
  return (
    <Router>
        
      <section>
        
        <Switch>
          <Route path="/" exact>
          <BrandHeader title="Home"></BrandHeader>
              <Home />
          </Route>
          <Route path="/todos" exact>
          <BrandHeader title="Todos"></BrandHeader>
              <Todo />
          </Route>
          <Route path="/Login" exact>
          <BrandHeader title="Loginnpm"></BrandHeader>
            <Login></Login>
          </Route>
          
        </Switch>

      </section>
    </Router>
  );
}

export default App;
