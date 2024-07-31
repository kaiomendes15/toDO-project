import { useState } from "react";
import BtnComplete from "../BtnComplete";

const CompleteFunction = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div className="cardOptions">
            <p>Completed {count} times!</p>
            <div className="alinharBtns">
                <BtnComplete onClick={increaseCount}>Done</BtnComplete>
                <BtnComplete >Delete task</BtnComplete>
            </div>
        </div>
        
    );
}

export default CompleteFunction;