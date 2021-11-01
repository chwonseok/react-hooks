import { useEffect, useLayoutEffect, useRef } from 'react';

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = 'HELLO';
  });

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value="CHWS"
        style={{ width: 400, height: 200 }}
      />
    </>
  );
};

export default UseLayoutEffect;
