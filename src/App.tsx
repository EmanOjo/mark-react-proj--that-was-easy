//parent component
import React, { useState } from 'react';

const difficulty = ['easy', 'ok', 'difficult', 'too difficult']

// const button = (n: string) => <button onClick={() =>
//   window.alert("that was " + n)}>{n}</button>

function CompiledButton() {
  const [isClicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);

  function clickEvent() {
    setClicked(!isClicked)
    setCount(count + 1)
  }
  return (
    <div>
      {difficulty.map((n: string) =>
        <button className={isClicked ? "test" : "nothing"}
          onClick={clickEvent}>{n}</button>)}
      <p>you clicked {count} times</p>
    </div>
  )
}
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>test counter</button>
//       <p>you clicked {count} times</p>
//     </div>
//   )
// }


function App() {
  return (
    <div>
      <CompiledButton />
    </div>
  );
}

export default App;

