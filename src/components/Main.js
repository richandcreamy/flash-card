import React, { Component } from 'react'
import Viewer from './Viewer'
import CardEditor from './CardEditor'

export class Main extends Component {
constructor (props) {
    super(props)
        this.state = {flip: true, cards: [{id:1, front:"front of card 1", back:"back of card 1"}, {id:2, front:"front of card 2", back:"back of card 2"}, {id:3, front:"front of card 3", back:"back of card 3"}]}
}

flipMe = () => {
    this.setState({flip: !this.state.flip})
}
addMe = (newCard) => {
    this.setState(state => ({cards:[...state.cards, newCard]}) )
}
    
render() {
        return (
            <div>
                { this.state.flip ? <Viewer cards = {this.state.cards} /> : <CardEditor addMe = {this.addMe} /> }
                
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