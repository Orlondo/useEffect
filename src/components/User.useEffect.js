import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

const App = () => {
  let userCycle;
  const [ state, setState ] = useState({
    data: null,
    randomUser: 'n/a'
  });

  useEffect(() => {
    console.log('Component Mounted.')
    
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setState({ ...state, data: res.data }))   
  }, [])

  useEffect(() => {
    console.log('Component Did Update')
    return () => {
      console.log('Component Unmounted')
      clearInterval(userCycle)  
    } 
  }, [state.randomUser])

  const showRandomUser = () => {
    userCycle = setInterval(() => setState({ ...state, randomUser: _.sample(state.data) }), 1000)
  }

  return (
    <div className="App">
      <h1>useEffect</h1>
      <div style={{textAlign: 'left', padding: '0 20px'}}>
        <h3>Current users:</h3>
        <ul style={{listStyle: 'none', padding: '0', margin: '0'}} >
          { _.map(state.data, (user, index) => (
              <li key={ index }> { user.name }</li>
            )
          )}
        </ul>
      </div>
      <div style={{textAlign: 'left', padding: '20px 20px'}}>
        <h3>Random user:</h3>
        <h1>{ state.randomUser.name }</h1>
        <button onClick={ showRandomUser }>Show Random User</button>
      </div>
    </div>
  );
}

export default App;
