import * as React from 'react'
import './Search.css'

export default class Search extends React.Component<{}, {value: string, isFetching: boolean}> {
    componentDidMount() {
        this.state = {
            value: '',
            isFetching: false
        }
    }

    handleChange = event => this.setState({
        value: event.target.value
    }, () => this.fetchCities(this.state.value));

    fetchCities = value => {
        this.setState({
            isFetching: true
        });
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=geocode&key=AIzaSyCCo_O6Jn8zm1-sQCWPdIQ466seYgvtLtI`)
            .then(response => response.json())
            .catch(error => console.log(error))
            .then(text => {
                console.log(text)
                this.setState({
                    isFetching: false
                });
            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <div className="search-input-wrapper">
                <input type="text" placeholder="Find place" className="search-input" onChange={(e) => this.handleChange(e)}/>
            </div>
        )
    }
}