import React from 'react'

import {Router, Route,Switch,HashRouter } from 'react-router-dom'
import Tobu from '../containers/tobu/index'
import Detal from '../containers/detail/index'

import App from '../containers/App'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    render() {

        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Tobu}></Route>
                          <Route path="/detail"   component={Detal}></Route>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </HashRouter >
        );

    }


}

export default RouteMap