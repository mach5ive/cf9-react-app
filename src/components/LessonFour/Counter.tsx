import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter =() => {
    const[counter, setCounter] = useState(0);
    // const [lastAction, setLastAction] = useState("Increase");
    // const [time, setTime] = useState("");
    //
    // const [state, setState] = useState({
    //     count: 0,
    //     lastAction: "",
    //     time:""
    // })

    const increaseCount = () => {
        setCounter(counter + 1);
    }
    const decreaseCount = () => {
        if (counter <= 1) {
            setCounter(counter - 1);
        }
        setCounter(counter - 1);
    }
    const resetCount = () => {
        setCounter(0);
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold">Count is {counter}</h1>
            <div className="text-center space-x-4 pt-12">
                <CounterButton
                    onClick={increaseCount}
                    label="Increase"
                />
                <CounterButton
                    addClasses="bg-cf-dark-red"
                    onClick={resetCount}
                    label="Reset"
                    disabled={counter === 0}
                />
                <CounterButton
                    onClick={decreaseCount}
                    label="Decrease"
                    disabled={counter === 0}
                />



                {/*<button*/}
                {/*    className="bg-black text-white py-2 px-4 rounded-2xl"*/}
                {/*    onClick={increaseCount}>*/}
                {/*    Increase*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className="bg-black text-white disabled:bg-cf-gray px-4 rounded-2xl"*/}
                {/*    onClick={resetCount}*/}
                {/*    disabled={counter === 0}*/}
                {/*>*/}
                {/*    Reset*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className="bg-black text-white disabled:bg-cf-gray py-2 px-4 rounded-2xl"*/}
                {/*    onClick={decreaseCount}*/}
                {/*    disabled={counter === 0}>*/}
                {/*    Decrease*/}
                {/*</button>*/}
            </div>
        </>
    )
}
export default Counter;