import React from 'react'
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { Spin } from 'antd';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/auth'
import './Login.css'

const layout = {
  labelCol: {
    span: 9 ,
  },
  wrapperCol: {
    span: 7,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 16,
  },
};

const LoginForm = (props) => {

  const onFinish = values => {
    // console.log(values.username, values.password)
    props.onAuth(values.username, values.password)
    props.history.replace('/')
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  let spinner = (
    <Form
    {...layout}
    name="basic"
    initialValues={{
        remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
    <Form.Item
        label="Username"
        name="username"
        rules={[
        {
            required: true,
            message: 'Please input your username!',
        },
        ]}
    >
        <Input />
    </Form.Item>

    <Form.Item
        label="Password"
        name="password"
        rules={[
        {
            required: true,
            message: 'Please input your password!',
        },
        ]}
    >
        <Input.Password />
    </Form.Item>

    <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Login
            </Button>
        Or
        <NavLink style={{marginLeft: '10px'}} to = '/signup/'>
            SignUp
        </NavLink>
    </Form.Item>
    </Form>
  )

  if(props.loading){
      spinner = (
        <div className="example">
            <Spin />
        </div>
      )
  }

  let errorMessage = null;
  if (props.error){
      errorMessage = (
          <p style={ { textAlign: 'center', color: 'red', fontWeight: 'bold' }}>{props.error.message}</p>
      )
  }

  return (
    <div>
        {errorMessage}
        {spinner}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actionTypes.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)