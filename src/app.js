import React, { Suspense } from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import Home from './pages/Home';
const Article = React.lazy(() => import('./pages/Article'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Blank = React.lazy(() => import('./pages/Blank'));
import Performance from "performance";

let p = new Performance({
    logUrl: "http://localhost:8000", // 错误上报地址,
    analyticsTracker: (data) => { console.log(data) }, //自定义监控数据处理 默认打印到控制台
    isResourceTiming: true, // 是否开启资源监控,
    captureError: false, // 是否开启错误上报,
    maxMeasureTime: 1500
})
console.log(p.v);

const App = () => {
    return (
        <>
            <Suspense fallback={<Spinner loading={true} />}>
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