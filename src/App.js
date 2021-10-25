import { content } from './UseTabs';

function App() {
  return (
    <div>
      {content.map((section, i) => (
        <button key={i}>{section.tab}</button>
      ))}
    </div>
  );
}

export default App;

// value={name.value} -> {...name}

/* useInput()
import { useInput } from './UseInput';
  
const validator = (maxLength) => maxLength.length <= 10;
const name = useInput('Mr. ', validator);
const email = useInput('@');

<h1>useInput</h1>
<input type="text" placeholder="name" {...name} />
<input type="email" placeholder="email" {...email} />

*/
