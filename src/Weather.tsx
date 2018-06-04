import * as React from 'react'
import './Weather.css'

export default class Weather extends React.Component<{name: string, temp: string}, {}> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="weather-wrapper">
                <div className="weather-main">
                    <p className="location">{this.props.name}</p>
                    <p className="temperature">{this.props.temp}</p>
                </div>
            </div>
        )
    }
}