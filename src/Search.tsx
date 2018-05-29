import * as React from 'react'
import './Search.css'

export default class Search extends React.Component {
    componentDidMount() {
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div className="search-input-wrapper">
                <input type="text" placeholder="Find place" className="search-input"/>
            </div>
        )
    }
}