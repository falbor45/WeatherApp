import * as React from 'react'
import './Autocomplete.css'

export default class Autocomplete extends React.Component<{hidden: boolean, predictions: null | Array<{ name: string, placeId: string}>}, {}> {
    render() {
        return (
            <div className="autocomplete-wrapper">
                {this.props.predictions !== null && !this.props.hidden ? this.props.predictions.map(e => (
                    <div className="autocomplete-item">
                        <p>{e.name}</p>
                    </div>
                )) : null
                }
            </div>
        )
    }
}