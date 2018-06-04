import * as React from 'react'
import './reset.css'
import './Main.css'
import Search from './Search'
import Weather from './Weather'

export default class Main extends React.Component<{}, {isFetching: boolean, weatherData: null | {name: string, main: {temp: string}}}> {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            weatherData: null
        };

        this.handleWeatherSearch.bind(this);
    }
    handleWeatherSearch = placeId => {
        this.setState({
            isFetching: true,
            weatherData: null
        }, () => this.fetchWeather(placeId));
    };

    fetchWeather = placeId => {
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCCo_O6Jn8zm1-sQCWPdIQ466seYgvtLtI`)
            .then(response => response.json())
            .then(json => fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${json.result.geometry.location.lat}&lon=${json.result.geometry.location.lng}&appid=c677e444b1a026066714e4f99c3cdd5c`)
                    .then(response => response.json())
                    .then(text => {
                        this.setState({
                            isFetching: false,
                            weatherData: text
                        });
                    })
                    .catch(error => {
                        this.setState({
                            isFetching: false
                        });
                        console.log(error)
                    })
            )
            .catch(error => {
                this.setState({
                    isFetching: false
                });
                console.log(error)
            });
    };
    render() {
        return(
            <div className="main-view">
                <Search onClick={this.handleWeatherSearch}/>
                {
                    this.state.weatherData !== null ?
                        <Weather name={this.state.weatherData.name}
                                 temp={`${(parseInt(this.state.weatherData.main.temp) - 273.15).toFixed(0)}\xB0C`}/> : null
                }
            </div>
        )
    }
}