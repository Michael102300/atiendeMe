import React, {Component} from 'react'
import { Switch} from 'react-router-dom'
import {Route} from 'react-router'
import Login from './Views/login'
import Registry from './Views/register'
import MapHospitals from './Components/mapHospital'
import Dashboard from './Views/dashboard'
import Settings from './Views/settings'
import Users from './Views/users'
import Reports from './Views/reports'
import Home from './Views/home'
import InfoHospital from './Views/infoHospital'

class App extends Component{
    constructor() {
        super()
       this.state={
       }
        
    }


    render(){
        
        return(
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/register" component={Registry}/>
                    <Route exact path="/home/:id" component={Home}/>
                    <Route path="/infohospital" component={InfoHospital}/>
                </Switch>
            </div>
        )
    }
}

export default App