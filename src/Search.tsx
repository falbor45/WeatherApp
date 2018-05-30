import * as React from 'react'
import './Search.css'

export default class Search extends React.Component<{}, {value: string, isFetching: boolean, predictions: null | Array<{name: string, placeId: string}>}> {
    componentDidMount() {
        this.state = {
            value: '',
            isFetching: false,
            predictions: null
        }
    }

    handleChange = event => this.setState({
        value: event.target.value
    }, () => this.fetchCities(this.state.value));

    fetchCities = value => {
        this.setState({
            isFetching: true
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
                });
            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <div>
                <div className="search-input-wrapper">
                <input type="text" placeholder="Find place" className="search-input" onChange={(e) => this.handleChange(e)}/>
                </div>
            </div>
        )
    }
}