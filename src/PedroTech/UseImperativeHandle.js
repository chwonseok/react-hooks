import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const ButtonChild = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

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
});

// Parent Component
const ButtonParent = () => {
  const buttonRef = useRef(null);

  return (
    <>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <ButtonChild ref={buttonRef} />
    </>
  );
};

export default ButtonParent;
