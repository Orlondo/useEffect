import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props)

    this.showRandomUser = this.showRandomUser.bind(this);
    this.userCycle = 'n/a';
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  state = {
    data: [],
    randomUser: 'n/a'
  }

  componentDidMount() {
    console.log('Component Mounted.')
    
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ data: res.data }))
  }

  componentDidUpdate() {
    console.log('Component Did Update')
  }

  componentWillUnmount() {
    console.log('Component Unmounted')
    clearInterval(this.userCycle);
  }

  showRandomUser() {
    this.userCycle = setInterval(() => this.setState({ randomUser: _.sample(this.state.data) }), 1000)
  }

  render() {
    return (
        <div className="App">
          <h1>useEffect</h1>
          <div style={{textAlign: 'left', padding: '0 20px'}}>
            <h3>Current users:</h3>
            <ul style={{listStyle: 'none', padding: '0', margin: '0'}} >
              { _.map(this.state.data, (user, index) => (
                  <li key={ index }> { user.name }</li>
                )
              )}
            </ul>
          </div>
          <div style={{textAlign: 'left', padding: '20px 20px'}}>
            <h3>Random user:</h3>
            <h1>{ this.state.randomUser.name }</h1>
            <button onClick={ this.showRandomUser }>Show Random User</button>
          </div>
        </div>
    );
  }
}

export default App;
