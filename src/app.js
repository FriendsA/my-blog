import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Resume from './pages/Resume';

const App = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact={true} component={Home}></Route>
                <Route path='/article' exact={true} component={Article}></Route>
                <Route path='/resume' exact={true} component={Resume}></Route>
            </Switch>
        </>
    )
}

export default App;