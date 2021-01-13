import './App.css';
import React from 'react';
import axios from 'axios';
import Users from './components/Users'

class App extends React.Component {
  constructor() {
    console.log('constructor invoked');
    super();
    this.state = {
      users: []
    }
  }
  followersArray = ['murphywrites',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];
  

  componentDidMount() {
    this.followersArray.forEach( user => {
      
      axios.get( URL = `https://api.github.com/users/${user}`)
    .then( res => {
      this.setState({
        users: [...this.state.users, res.data]
      })
    })
    .catch(err => {
      console.log(err)
    })

    })
    
}


  
  render() {
    console.log('render invoked')
    console.log(this.state.users)
  return (
    <div className="App">
      Github User Cards
      {(this.state.users.length === 0) ? <h3>loading... </h3> : <Users users={this.state.users}/>}
    </div>
  );
}
}

export default App;
