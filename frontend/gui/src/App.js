import React, {Component} from 'react';
import 'antd/dist/antd.css'
import Layout from './containers/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './hoc/routes';
import { connect } from 'react-redux'
import * as actionTypes from './store/actions/auth'

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <div>
      <Router>
        <Layout {...this.props}>
          <Route />
        </Layout>
      </Router>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actionTypes.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
