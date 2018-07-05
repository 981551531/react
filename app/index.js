import React from 'react';
import ReactDom from 'react-dom';
import Tobu from './containers/tobu/index'
import  {HashRouter } from 'react-router-dom'
import RouteMap from './router/routeMap'

ReactDom.render(
    <RouteMap history={HashRouter }/>,
    document.getElementById('root')
)