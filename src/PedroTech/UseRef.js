import { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Wonseok Choi</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </>
  );
};

export default UseRef;
