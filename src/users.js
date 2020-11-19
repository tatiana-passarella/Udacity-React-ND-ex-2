import React, { Component } from 'react';

class Users extends Component{
    render(){
        return(
            <div>
                {this.props.profiles.length > 0 ? 
                <ul>
                {this.props.profiles.map(profile => <li key={profile.userID}>{this.props.users[profile.userID].name}</li>)}
                </ul> : ''}
            </div>
        )
    }
}

export default Users