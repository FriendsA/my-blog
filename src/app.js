import React, { Suspense } from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import Home from './pages/Home';
const Article = React.lazy(() => import('./pages/Article'));
const Resume = React.lazy(() =>  import('./pages/Resume'));
const Blank = React.lazy(() => import('./pages/Blank'));

const App = () => {
    return (
        <>
            <Suspense fallback={<Spinner loading={true}/>}>
                <Switch>
                    <Route path='/' exact={true} component={Home}></Route>
                    <Route path='/article' exact={true} component={Article}></Route>
                    <Route path='/resume' exact={true} component={Resume}></Route>
                    <Route path="*" component={Blank}></Route>
                </Switch>
            </Suspense>
        </>
    )
}

export default App;