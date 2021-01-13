import React from 'react'

class SubUserCard extends React.Component {
render() {

    return (
        <div className = {`${this.props.parent} subusercard-container`} >
            <img src={this.props.user.avatar_url} alt='avatar' />
            <div className = "card-info">
                <h3 className="name">{this.props.user.name}</h3>
                <p class="username">{this.props.user.login}</p>
                <a href={this.props.user.html_url}>Profile</a>
            </div>

        </div>
    )
}
}
export default SubUserCard