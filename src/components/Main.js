import React, { Component } from 'react'
import Viewer from './Viewer'
import CardEditor from './CardEditor'

export class Main extends Component {
constructor (props) {
    super(props)
        this.state = {flip: true}
}

flipMe = () => {
    this.setState({flip: !this.state.flip})
}

    render() {
        return (
            <div>
                { this.state.flip ? <Viewer /> : <CardEditor /> }
                
                <button onClick= {this.flipMe} >Switch</button>
            </div>
        )
    }
}
// Be able to switch between Viewer and CardEditor
// Conditionally render between Viewer and CardEditor
// Viewer should default to flash card example
// CardEditor can edit the current card in view
export default Main