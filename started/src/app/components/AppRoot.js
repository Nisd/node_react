/**
 * Created by pomy on 15/11/13.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

import config from '../../../config/app';

class AppRoot extends Component {
    render(){
        return (
            <div>
                <h2>{config.title}</h2>
                <ul>
                    <li><Link to = "/" >Home</Link></li>
                    <li><Link to = '/about' >About</Link></li>
                    <li><Link to = '/404' >404</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default AppRoot;