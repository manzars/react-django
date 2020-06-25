// import React from 'react';


// const submitHandler = (event) => {
//     event.preventDefault()
//     const title = event.target.elements.title.value
//     const content = event.target.elements.content.value
//     console.log(title, content)
//     console.log("manzar")
// }

// const CustomForm = (props) => {

//   return (
//     <div>
//       <Form onSubmit={submitHandler}>
//         <Form.Item label="Title">
//           <Input name = "title" placeholder="Enter Title" />
//         </Form.Item>
//         <Form.Item label="Content">
//           <Input name = "content" placeholder="Enter Content" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType = "submit">Submit</Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };



import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import axios from 'axios'

export class CustomForm extends Component {

    handleFormSubmit = (value, submitType, articleID) => {
        // event.preventDefault()
        const title = value.title
        const content = value.content
        switch (submitType) {
            case 'post' :
                axios.post("http://127.0.0.1:8000/api/", {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
                break
            case 'put' :
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
                break
            default:
                return
        }
    }

    render() {
        return (
            <div>
                <Form onFinish={(value) => this.handleFormSubmit(value, this.props.submitType, this.props.articleID)}>
                    <Form.Item name="title" label="Title">
                        <Input  placeholder="Enter Title" value = "manzar" />
                    </Form.Item>
                    <Form.Item name="content" label="Content">
                        <Input placeholder="Enter Content" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType = "submit">{this.props.btnType}</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CustomForm
