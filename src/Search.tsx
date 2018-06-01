import * as React from 'react'
import './Search.css'
import Autocomplete from './Autocomplete'

export default class Search extends React.Component<{onClick: any}, { value: string, fetchesRunning: number, predictions: null | Array<{ name: string, placeId: string }>, isAutocompleted: boolean }> {
        constructor(props) {
        super(props);

        this.state = {
            value: '',
            fetchesRunning: 0,
            predictions: null,
            isAutocompleted: false
        };

        this.handleAutocomplete.bind(this);
    }

    handleChange = event => this.setState({
        value: event.target.value
    }, () => this.fetchCities(this.state.value));

    fetchCities = value => {
        this.setState({
            fetchesRunning: this.state.fetchesRunning + 1,
        });
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=(cities)&key=AIzaSyCCo_O6Jn8zm1-sQCWPdIQ466seYgvtLtI`)
            .then(response => response.json())
            .then(text => {
                this.setState({
                    fetchesRunning: this.state.fetchesRunning - 1,
                    predictions: value !== '' ? text.predictions.map(e => {
                        return {
                            name: e.description,
                            placeId: e.place_id
                        }
                    }) : null,
                    isAutocompleted: false
                });
            })
            .catch(error => {
                this.setState({
                    fetchesRunning: this.state.fetchesRunning - 1
                });
                console.log(error);
            })
    };

    handleAutocomplete = (placeName: string, placeId: string) => {
        this.setState({
            value: placeName,
            isAutocompleted: true
        }, () => this.props.onClick(placeId))
    };

    render() {
        return (
            <div>
                <div className="search-input-wrapper">
                    <input type="text" placeholder="Find place" value={this.state.value} className={`search-input ${this.state.value !== '' && !this.state.isAutocompleted ? 'open' : null}`}
                           onChange={(e) => this.handleChange(e)}/>
                    <Autocomplete onClick={this.handleAutocomplete}
                                  loading={this.state.fetchesRunning > 0 && this.state.value !== ''}
                                  hidden={this.state.value === '' || this.state.fetchesRunning > 0 || this.state.isAutocompleted}
                                  predictions={this.state.predictions !== null ? this.state.predictions : null}/>
                </div>
            </div>
        )
    }
}