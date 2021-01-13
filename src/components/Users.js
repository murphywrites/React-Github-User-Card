import React from 'react'
import UserCard from './UserCard'

class Users extends React.Component {

    render () {
        console.log(this.props.users)
        return(
        <div className = "users-container" >
            {this.props.users.map ( user => {
                return(
                <UserCard key={user.id} user={user}/>
                )
            })}    
        </div>
        )
    }
}

export default Users;