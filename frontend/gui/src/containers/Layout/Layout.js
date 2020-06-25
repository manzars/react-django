import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './Layout.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/auth'

const { Header, Content, Footer } = Layout;

function layout(props) {

    const logoutHandler = () => {
        props.authLogout()
    }

    let menuItems = null
    if(props.isAuthenticated){
        menuItems = (
            <Menu.Item key="2" onClick = {logoutHandler}>
                Logout
            </Menu.Item>
        )
    }else{
        menuItems= (
            <Menu.Item key="2">
                <Link to = "/login">Login</Link>
            </Menu.Item>
        )
    }

    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to = "/">Posts</Link>
                </Menu.Item>
                {menuItems}
                
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to = '/' >Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to = '/'>List</Link></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                {props.children}
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        authLogout: () => dispatch(actionTypes.logout())
    }
}

export default connect(null, mapDispatchToProps)(layout)