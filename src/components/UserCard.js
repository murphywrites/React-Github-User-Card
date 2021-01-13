import React from 'react'
import axios from 'axios'
import SubUserCard from './SubUserCard'
import styled from 'styled-components'


class UserCard extends React.Component {
    constructor() {
        console.log('constructor invoked');
        super();
        this.state = {
          follower_list: []
        }
    }
    
componentDidMount() {
  axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
  .then( res => {
        const followList = res.data
    this.setState({
      follower_list: followList
    })
  })
    .catch( err => {
      console.log(err)
  
    })
  
}

handleClick = () => {
    var x = document.getElementById(`${this.props.user.login}`);
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }   
}
    render () {
        console.log(this.state.follower_list)
        return(
        <div className = "usercard-container" >
            <img src={this.props.user.avatar_url} alt='avatar' />
            <div className = "card-info">
                <h3 className="name">{this.props.user.name}</h3>
                <p className="username">{this.props.user.login}</p>
                <p>Location: {this.props.user.location}</p>
                <p>Profile:
                <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                <p onClick={this.handleClick}>Followers (click to see more): {this.props.user.followers}</p>
                <div className = "followers-container" id = {this.props.user.login}>
                    {this.state.follower_list.map(follower => {
                        return (
                            <SubUserCard parent= {this.props.user.login} user = {follower} />
                            )
                        }
                            )}
                </div>
                <p>Following: {this.props.user.following}</p>
                <p>Bio: {this.props.user.bio}</p>
            </div>

        </div>
        )
    }
}

export default UserCard;

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/