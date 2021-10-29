import { useState } from 'react';

export default function UseEffectApp() {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
