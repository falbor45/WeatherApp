import * as React from 'react'
import './Background.css'
import { CSSTransition } from 'react-transition-group';

export default class Background extends React.Component<{bg: string}, {}> {

    render() {
        return(
            <div>
                <div className="background"
                     style={{backgroundImage: `url(${this.props.bg})`}}>
                </div>
            </div>
        )
    }
}