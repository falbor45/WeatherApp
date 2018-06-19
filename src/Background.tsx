import * as React from 'react'
import './Background.css'
import { CSSTransition } from 'react-transition-group';

export default class Background extends React.Component<{images: {newBackground: string, oldBackground: string}}, {visibleBackground: number}> {
    constructor(props) {
        super(props);

        this.state = {
            visibleBackground: 0
        }
    }

    render() {
        return(
            <div onClick={() => this.setState({
                visibleBackground: this.state.visibleBackground === 0 ? 1 : 0
            })}>
                <CSSTransition
                    in={this.state.visibleBackground === 0}
                    timeout={1000}
                    classNames="background"
                >
                {
                        <div className="background"
                             style={{backgroundImage: `url(${this.props.images.newBackground})`}}>
                        </div>
                }
                </CSSTransition>
                <CSSTransition
                    in={this.state.visibleBackground === 1}
                    timeout={1000}
                    classNames="background"
                >
                {
                        <div className="background"
                             style={{backgroundImage: `url(${this.props.images.oldBackground})`}}>
                        </div>
                }
                </CSSTransition>
            </div>
        )
    }
}