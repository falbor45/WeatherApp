import * as React from 'react'
import './Main.css'
import Search from './Search'

export default class Main extends React.Component {
    render() {
        return(
            <div className="main-view">
                <Search/>
            </div>
        )
    }
}