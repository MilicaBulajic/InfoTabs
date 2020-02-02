import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

class App extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <First />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Second />
          </Tab>
          <Tab eventKey="contact" title="Contact">
          <Third />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;