import { useInput } from './UseInput';

function App() {
  const validator = (maxLength) => maxLength.length <= 10;
  const name = useInput('Mr. ', validator);
  const email = useInput('@');
  console.log(name);

  return (
    <div>
      <h1>useInput</h1>
      <input type="text" placeholder="name" {...name} />
      <input type="email" placeholder="email" {...email} />
    </div>
  );
}

export default App;

// value={name.value} -> {...name}
