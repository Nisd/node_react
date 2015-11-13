/**
 * Created by pomy on 15/11/13.
 */
import React, {Component} from 'react';

class UserProfile extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li>name: {this.props.user.name}</li>
                    <li>age: {this.props.user.age}</li>
                    <li>location: {this.props.user.location}</li>
                    <li>location: {this.props.user.blog}</li>
                </ul>
            </div>
        )
    }
}

export default UserProfile;