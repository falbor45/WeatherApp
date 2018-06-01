import * as React from 'react'
import './Autocomplete.css'

export default class Autocomplete extends React.Component<{onClick: any, loading: boolean, hidden: boolean, predictions: null | Array<{ name: string, placeId: string}>}, {}> {
    render() {
        return (
            <div className="autocomplete-wrapper">
                {
                    this.props.predictions !== null && !this.props.hidden && !this.props.loading ? this.props.predictions.map(e => (
                    <div className="autocomplete-item"
                         onClick={() => {this.props.onClick(e.name, e.placeId)}}>
                        <p>{e.name}</p>
                    </div>
                )) : null
                }
                {
                    this.props.loading ? (
                        <div className="autocomplete-item">
                            <div className="autocomplete-loader">
                            </div>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}