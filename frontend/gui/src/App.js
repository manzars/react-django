import React from 'react';
import 'antd/dist/antd.css'
import Layout from './containers/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './hoc/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
