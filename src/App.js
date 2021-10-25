import { useInput } from './UseInput';

function App() {
  const name = useInput('Mr. ');

  return (
    <div>
      <h1>useInput</h1>
      <input type="text" placeholder="name" {...name} />
    </div>
  );
}

export default App;

// value={name.value} -> {...name}
