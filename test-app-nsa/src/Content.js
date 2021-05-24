import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import Login from './Login.js'
import Reports from './Reports.js'
import SignOut from './SignOut.js'

export default function Content() {
    return(
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Reports" component={Reports} />
                <Route path="/SignOut" component={SignOut} />
            </Switch>
        </main>
    )
}