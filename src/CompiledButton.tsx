import { useState } from "react";


export default function CompiledButton({ label }: { label: string }) { //components should do as little as possible
    const [isClicked, setClicked] = useState(false);
    const [count, setCount] = useState(0);

    function clickEvent() { //counter function
        setClicked(!isClicked)//changes boolean value of setclicked 
        setCount(count + 1)//adds one to SetCount
    }
    return (
        <div>
            <button className={isClicked ? "test" : "nothing"}
                onClick={clickEvent}>{label}</button>
            <p>you clicked {count} times</p>
        </div>
    )
}
