import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import GamesGrid from './Components/GamesGrid/GamesGrid';
import Form from './Components/Form/Form';
import GameInfo from './Components/GameInfo/GameInfo';
import Edit from './Components/Edit/Edit';

const App=()=> {
  return (
    <div className="App">
      <Toolbar/>
      <Switch>
        <Route path='/games'  component={GamesGrid} /> 
        <Route path='/create' exact component={Form} />
        <Route path='/game/:id' exact component={GameInfo}/>
        <Route path='/edit/:id' exact component={Edit}/>
        <Redirect from='/' to='/games'/> 
      </Switch>
    </div>
  );
}

export default App;
