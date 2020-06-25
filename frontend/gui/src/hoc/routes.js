import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ArticleListView from '../containers/ArticleListView/ArticleListView'
import DetailListView from '../containers/DetailListView/DetailListView'
import LoginForm from '../containers/Login/Login'
import SignupForm from '../containers/Signup/Signup'

function Router() {
    return (
        <div>
            <Switch>
                <Route exact path = "/" component = {ArticleListView}/>
                <Route path = "/login" component = {LoginForm}/>
                <Route path = "/signup" component = {SignupForm}/>
                <Route path = "/:articleId" component = {DetailListView}/>
            </Switch>
        </div>
    )
}
export default Router