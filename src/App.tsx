//parent component
import React, { useState } from 'react';

const difficulty = ['easy', 'ok', 'difficult', 'too difficult']

// const button = (n: string) => <button onClick={() =>
//   window.alert("that was " + n)}>{n}</button>

function CompiledButton() {
  const [isClicked, setClicked] = useState(false);
  return (
    <div>
      {difficulty.map((n: string) =>
        <button className={isClicked ? "test" : "nothing"}
          onClick={() => setClicked(!isClicked)}>{n}</button>)}
    </div>
  )
}

function App() {
  return (
    <div>
      <CompiledButton />

    </div>
  );
}

export default App;

