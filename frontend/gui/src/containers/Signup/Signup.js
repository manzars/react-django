import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/auth'
import './Signup.css'
import { Spin } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 9,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 9,
    },
  },
};

const SignupForm = (props) => {

  const onFinish = values => {
    props.onAuth(values.username, values.email, values.password,values.confirm)
    props.history.replace('/')
  };

  let spinner = (
        <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
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
        name="email"
        label="E-mail"
        rules={[
            {
            type: 'email',
            message: 'The input is not valid E-mail!',
            },
            {
            required: true,
            message: 'Please input your E-mail!',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        name="password"
        label="Password"
        rules={[
            {
            required: true,
            message: 'Please input your password!',
            },
        ]}
        hasFeedback
        >
        <Input.Password />
        </Form.Item>

        <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
            {
            required: true,
            message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
            validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
            },
            }),
        ]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Signup
        </Button>
            Or
        <NavLink style={{marginLeft: '10px'}} to = '/login/'>
            Login
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
        errors: state.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actionTypes.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
