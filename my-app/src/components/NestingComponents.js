import React, { Component } from 'react'
import UserMsg from './UserMsg'
import UserData from './UserData'

export class NestingComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoaded: true,
             isLoggedIn: true,
        }
    }
    
    render() {
        return (
            <div>
                <UserData isLoaded={this.state.isLoaded} />
                <UserMsg isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    }
}

export default NestingComponents
