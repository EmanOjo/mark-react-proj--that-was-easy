//parent component
import CompiledButton from './CompiledButton';

const difficulties = ['easy', 'ok', 'difficult', 'too difficult']

// const button = (n: string) => <button onClick={() =>
//   window.alert("that was " + n)}>{n}</button>



function App() {
  return (
    <div>
      {difficulties.map(difficulty => <CompiledButton label={difficulty} />)}
    </div>
  );
}

export default App;


