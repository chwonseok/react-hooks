import { useState } from 'react';

export function ButtonChild() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </div>
  );
}

const UseImperativeHandle = () => {
  return (
    <>
      <button>Button From Parent</button>
      <ButtonChild />
    </>
  );
};

export default UseImperativeHandle;
