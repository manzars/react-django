import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'antd'
import CustomForm from '../../components/Form/Form'

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

    deleteHandler = (event) => {
        event.preventDefault()
        const articlID = this.props.match.params.articleId
        axios.delete(`http://127.0.0.1:8000/api/${articlID}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title} >
                    <p>{this.state.article.content}</p>
                </Card>
                <br />
                <h2>Update Article</h2>
                <CustomForm btnType = "Update" submitType = "put" articleID = {this.props.match.params.articleId}/>
                <form onSubmit = {this.deleteHandler}>
                    <Button type = 'danger' htmlType = "submit">Delete</Button>
                </form>
            </div>
        )
    }
}

export default DetailListView
