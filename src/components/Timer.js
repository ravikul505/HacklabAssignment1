import Recat, { useState } from "react"

function Timer() {

    let [counterA, setCounterA] = useState(3);


    // Recat.useEffect(() => {
    //     function reset() {
    //         let timer = counterA == 0 && setInterval(() => setCounterA(5), 1000);
    //         return () => clearInterval(timer);
    //     }
    //     let a = reset();
    //     return a;

    // }, [counterA])
    const [counterB, setCounterB] = useState(3);
    // Recat.useEffect(() => {

    //     const timer =
    //         counterB > 0 && setInterval(() => setCounterB(counterB - 1), 1000);

    //     return () => clearInterval(timer);

    // }, [counterB])
    const [counterC, setCounterC] = useState(3);
    // Recat.useEffect(() => {

    //     const timer =
    //         counterC > 0 && setInterval(() => setCounterC(counterC - 1), 1000);

    //     return () => clearInterval(timer);

    // }, [counterC])
    Recat.useEffect(() => {

        // const timer =
        //     counterA > 0 && setInterval(() => setCounterA(counterA - 1), 1000);

        // return () => clearInterval(timer);
        let timer = null;
        if (counterA > 0) {
            timer = setInterval(() => setCounterA(counterA - 1), 1000);
        } else if (counterB > 0) {
            timer = setInterval(() => setCounterB(counterB - 1), 1000);
        } else if (counterC > 0) {
            timer = setInterval(() => setCounterC(counterC - 1), 1000);
        }
        // else if (counterA == 0 && counterB == 0 && counterC == 0) {
        //     timer = [setInterval(() => setCounterA(3), 1000),
        //     setInterval(() => setCounterB(4), 1000),
        //     setInterval(() => setCounterC(5), 1000)]
        // }

        return () => clearInterval(timer);

    }, [counterA, counterB, counterC]);


    return (
        <article className="w">
            <button className="x">{counterA}</button>
            {/* {counterA = 0 ? setCounterA(counterA = 5) : setCounterA(counterA = counterA)} */}
            <button className="y">{counterB}</button>
            <button className="z">{counterC}</button>

        </article>
    )

}

export default Timer;