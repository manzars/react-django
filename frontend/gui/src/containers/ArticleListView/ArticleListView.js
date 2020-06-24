import React, { Component } from 'react'
import Articles from '../../components/Article/Article'
import axios from 'axios'

class ArticleListView extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/")
        .then(res => {
            this.setState({
                articles: res.data
            })
            console.log(this.state.articles)
        })
  }

    render() {
        return (
            <Articles data = {this.state.articles}/>
        )
    }
}

export default ArticleListView
