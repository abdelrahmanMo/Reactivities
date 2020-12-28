import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react'

function App() {

  useEffect(() => {
    axios.get('http://localhost:5000/api/values')
    .then(response => {
       
      })
  })
  return (
    <div className="App">
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
      </Header>
    </div>
  );
}

export default App;
