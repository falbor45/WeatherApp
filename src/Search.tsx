import * as React from 'react'
import './Search.css'
import Autocomplete from './Autocomplete'

export default class Search extends React.Component<{}, { value: string, isFetching: boolean, predictions: null | Array<{ name: string, placeId: string }>, isAutocompleted: boolean }> {
        constructor(props) {
        super(props);

        this.state = {
            value: '',
            isFetching: false,
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
            isFetching: true,
        });
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=(cities)&key=AIzaSyCCo_O6Jn8zm1-sQCWPdIQ466seYgvtLtI`)
            .then(response => response.json())
            .then(text => {
                this.setState({
                    isFetching: false,
                    predictions: value !== '' ? text.predictions.map(e => {
                        return {
                            name: e.description,
                            placeId: e.place_id
                        }
                    }) : null,
                    isAutocompleted: false
                });
            })
            .catch(error => console.log(error))
    };

    handleAutocomplete = value => {
        this.setState({
            value: value,
            isAutocompleted: true
        })
    };

    render() {
        return (
            <div>
                <div className="search-input-wrapper">
                    <input type="text" placeholder="Find place" value={this.state.value} className={`search-input ${this.state.value !== '' && !this.state.isAutocompleted ? 'open' : null}`}
                           onChange={(e) => this.handleChange(e)}/>
                    <Autocomplete onClick={this.handleAutocomplete}
                                  hidden={this.state.value === '' || this.state.isFetching || this.state.isAutocompleted}
                                  predictions={this.state.predictions !== null ? this.state.predictions : null}/>
                </div>
            </div>
        )
    }
}