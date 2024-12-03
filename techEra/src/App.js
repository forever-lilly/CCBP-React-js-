import {Route, Switch} from 'react-router-dom'

import Home from './Component/Home'
import CourseItemDetails from './Component/CourseItemDetails'
import Notfound from './Component/Notfound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetails} />
    <Route component={Notfound} />
  </Switch>
)

export default App
