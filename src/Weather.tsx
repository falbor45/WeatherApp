import * as React from 'react'
import './Weather.css'

export default class Weather extends React.Component<{city: string, name: string, temp: string, pressure: number, humidity: number, wind: number, description: string}, {}> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="weather-wrapper">
                <p className="weather-heading">{this.props.city}</p>
                <p className="weather-description">{this.props.description}</p>
                <span className="separator"> </span>
                <div className="weather-position">
                    <p className="weather-title">Temperature</p>
                    <p className="temperature">{this.props.temp}</p>
                </div>
                <span className="separator"> </span>
                <div className="weather-position">
                    <p className="weather-title">Pressure</p>
                    <p className="temperature">{this.props.pressure}hPa</p>
                </div>
                <span className="separator"> </span>
                <div className="weather-position">
                    <p className="weather-title">Humidity</p>
                    <p className="temperature">{this.props.humidity}%</p>
                </div>
                <span className="separator"> </span>
                <div className="weather-position">
                    <p className="weather-title">Wind</p>
                    <p className="temperature">{this.props.wind.toFixed(1)}km/h</p>
                </div>
            </div>
        )
    }
}