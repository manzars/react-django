import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd'

class DetailListView extends Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articlID = this.props.match.params.articleId
        console.log(articlID)
        axios.get(`http://127.0.0.1:8000/api/${articlID}`)
        .then(res => {
            this.setState({
                article: res.data
            })
            console.log(this.state.article)
        })
  }

    render() {
        return (
            <Card title={this.state.article.title} >
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

export default DetailListView
