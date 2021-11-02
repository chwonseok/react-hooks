import { useEffect } from 'react';

const UseCallbackChild = ({ returnComment }) => {
  useEffect(() => {
    console.log('FUNCTION HAS BEEN CALLED');
  }, [returnComment]);

  return (
    <>
      <div>{returnComment('chws')}</div>
    </>
  );
};

export default UseCallbackChild;
