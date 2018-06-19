import * as React from 'react'
import './reset.css'
import './Main.css'
import Search from './Search'
import Weather from './Weather'
import Background from './Background'
import { determineBackground } from './Helpers'
import { CSSTransition } from 'react-transition-group'

export default class Main extends React.Component<{}, {backgroundPaths: {newBackground: string, oldBackground: string}, city: null | string, isFetching: boolean, weatherData: null | {name: string, main: {temp: string, pressure: number, humidity: number}, wind: {speed: number}, weather: {description: string, icon: string}}, showWeatherComponent: boolean}> {
    constructor(props) {
        super(props);

        this.state = {
            city: null,
            isFetching: false,
            weatherData: null,
            showWeatherComponent: false,
            backgroundPaths: {
                newBackground: require('./assets/mist2.jpg'),
                oldBackground: require('./assets/mist1.jpg')
            }
        };

        this.handleWeatherSearch.bind(this);
    }
    handleWeatherSearch = (placeId: string, city: string) => {
        this.setState({
            city: city,
            isFetching: true,
            showWeatherComponent: false
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
                            weatherData: text,
                            showWeatherComponent: true,
                            backgroundPaths: determineBackground(text.weather[0].icon, this.state.backgroundPaths.newBackground)
                        });
                        console.log(text)
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
        return (
            <div>
            <Background images={this.state.backgroundPaths}/>
            <div className="main-view">
                <Search onClick={this.handleWeatherSearch}/>
                <CSSTransition
                    in={this.state.showWeatherComponent}
                    timeout={250}
                    classNames="weather"
                    onExited={() =>
                        this.setState({
                        weatherData: null
                    })
                    }
                >
                {
                    this.state.weatherData !== null ?
                        <Weather description={this.state.weatherData.weather[0].description}
                                 wind={this.state.weatherData.wind.speed * 3.6}
                                 humidity={this.state.weatherData.main.humidity}
                                 pressure={this.state.weatherData.main.pressure}
                                 city={this.state.city}
                                 name={this.state.weatherData.name}
                                 temp={`${(parseInt(this.state.weatherData.main.temp) - 273.15).toFixed(0)}\xB0C`}/> : <div></div>
                }
                </CSSTransition>
            </div>
            </div>
        )
    }
}