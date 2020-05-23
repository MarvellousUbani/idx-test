import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import ProfilePage from './pages/profile/profile.component';
import HelpPage from './pages/help/help.component';


class App extends Component{

  render(){    
    return (

      <div className="container row">
        <Header/>
        <Switch>
          <Route exact path="/" component={ProfilePage} />
          <Route exact path="/help" component={HelpPage} />
        </Switch>
      </div>

    )
  }
}



export default App;
