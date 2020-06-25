import React, { Component } from 'react'
import Articles from '../../components/Article/Article'
import axios from 'axios'
import CustomForm from '../../components/Form/Form'

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
            <div>
                <Articles data = {this.state.articles}/>
                <br />
                <h2>Create New Post</h2>
                <CustomForm btnType = "Create" submitType = "post" articleID = {null}/>
            </div>
        )
    }
}

export default ArticleListView
