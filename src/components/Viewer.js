import React, { Component } from 'react'

export class Viewer extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="container" >
                <h1>Viewer</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Front</th>
                        <th scope="col">Back</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.cards.map((card, index)=> {
                            return (<tr key={card.id} >
                                <th scope="row">{ index+1 }</th>
                                <td>{ card.front }</td>
                                <td>{ card.back }</td>                                
                                </tr>)
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default Viewer