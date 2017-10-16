import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Container extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document
            .body
            .addEventListener('touchmove', (ev) => {
                ev.preventDefault();
            });
    }
    render() {

        for (var item of this.props.children) {
            if (item.props.path == this.props.location.pathname) {
                var Component = item.props.component;
                break;
            }
        }
        console.log('this.props.history', this.props.history)
        switch (this.props.history.action) {
            case 'POP':
                var transitionName = 'slide-out'
                break;
            case 'PUSH':
                var transitionName = 'slide-in'
                break;
        }

        return (
            <ReactCSSTransitionGroup
                component="div"
                className="react-container"
                transitionName={transitionName}
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}>
                <div
                    key={this.props.location.pathname}
                    style={{
                    zIndex: 10,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    width: '100vw',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    height: '100vh',
                    background: 'white'
                }}>
                    <Component location={this.props.location} history={this.props.history}/>
                </div>

            </ReactCSSTransitionGroup>
        );
    }

}