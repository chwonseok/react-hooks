import { useCallback, useState } from 'react';
import UseCallbackChild from './UseCallbackChild';

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState('kia ora, ');

  const returnComment = useCallback((name) => data + name, [data]);

  return (
    <>
      <UseCallbackChild returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </>
  );
};

export default UseCallback;
