import Red from './Red'
import Yellow from './Yellow'
import Green from './Green'
import React from 'react';

class Auto extends React.PureComponent {
    state = {
        green: true,
        yellow: false,
        red: false
    };

    transition = () => {
        if (this.state.green) {
            this.setState({
                green: false,
                yellow: true,
                red: false
            });
            this.waitLongInterval();
            return;
        }

        if (this.state.yellow) {
            this.setState({
                green: false,
                yellow: false,
                red: true
            });
            this.waitLongInterval();
            return;
        }

        if (this.state.red) {
            this.setState({
                green: true,
                yellow: false,
                red: false
            });
            this.waitLongInterval();
            return;
        }
    }

    waitLongInterval() {
        setTimeout(this.transition, 1000)
    }

    waitShortInterval() {
        setTimeout(this.transition, 500)
    }

    componentDidMount() {
        this.waitLongInterval();
    }

    render() {
        const { green, yellow, red } = this.state;
        return (
            <div>
                <Red isOn={red} />
                <Yellow isOn={yellow} />
                <Green isOn={green} />
            </div>
        )
    }
}
export default Auto