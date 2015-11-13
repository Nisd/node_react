/**
 * Created by pomy on 15/11/13.
 */

import React, {Component} from 'react';
import UserProfile from './UserProfile';

class About extends Component{
    render(){
        const user = {
            name: 'pomy',
            age: 21,
            location: 'guangzhou, China',
            blog: 'http://www.ido321.com'
        };
        return (
            <div>
                <h3>about page</h3>

                <UserProfile user={user} />
            </div>
        )
    }
}

export default About;