import { createMachine, interpret, assign } from 'xstate';
import Red from './components/Red'
import Yellow from './components/Yellow'
import Green from './components/Green'

function Auto() {
    const lightMachine = createMachine({
        id: 'lightMachine',
        initial: 'green',
        states: {
            GREEN: {
                on: {
                    NEXT: 'YELLOW'
                }
            },
            YELLOW: {
                on: {
                    NEXT: 'RED'
                }
            },
            RED: {
                on: {
                    NEXT: 'GREEN'
                }
            }
        }
    });
}
export default Auto