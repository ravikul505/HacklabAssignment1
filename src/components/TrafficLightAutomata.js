import * as React from "react";
import { withStateMachine } from "react-automata";
import Green from "./Green";
import Yellow from "./Yellow";
import Red from "./Red";

class TrafficLight extends React.PureComponent {
    transition = () => {
        this.props.transition("NEXT");
    };

    waitLongInterval() {
        setTimeout(this.transition, 2000);
    }

    waitShortInterval() {
        setTimeout(this.transition, 800);
    }

    render() {
        const { machineState } = this.props;

        return (
            <div>
                <Red isOn={machineState.value === "RED"} />
                <Yellow isOn={machineState.value === "YELLOW"} />
                <Green isOn={machineState.value === "GREEN"} />
            </div>
        );
    }
}
const stateChart = {
    initial: "GREEN",
    states: {
        GREEN: {
            on: {
                NEXT: "YELLOW"
            },
            onEntry: "waitLongInterval"
        },
        YELLOW: {
            on: {
                NEXT: "RED"
            },
            onEntry: "waitShortInterval"
        },
        RED: {
            on: {
                NEXT: "GREEN"
            },
            onEntry: "waitLongInterval"
        }
    }
};

export default withStateMachine(stateChart)(TrafficLight);
