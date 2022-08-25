import * as React from "react";
import Green from "./Green";
import Yellow from "./Yellow";
import Red from "./Red";

class TrafficLight extends React.PureComponent {
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
            this.waitShortInterval();
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
    };

    waitLongInterval() {
        setTimeout(this.transition, 2000);
    }

    waitShortInterval() {
        setTimeout(this.transition, 800);
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
        );
    }
}

export default TrafficLight;
