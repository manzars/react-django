import React from 'react'
import {Route} from 'react-router-dom'
import ArticleListView from '../containers/ArticleListView/ArticleListView'
import DetailListView from '../containers/DetailListView/DetailListView'

function Router() {
    return (
        <div>
            <Route exact path = "/" component = {ArticleListView}/>
            <Route exact path = "/:articleId" component = {DetailListView}/>
        </div>
    )
}
export default Router