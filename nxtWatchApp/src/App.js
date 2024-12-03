import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import TrendingRoute from './components/TrendingRoute'
import NotFoundRoute from './components/NotFoundRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/gaming" component={GamingRoute} />
    <Route exact path="/saved-games" component={SavedVideosRoute} />
    <Route exact path="/trending" component={TrendingRoute} />
    <Route path="/not-found" component={NotFoundRoute} />
    <Redirect path="/not-found" />
  </Switch>
)
export default App
