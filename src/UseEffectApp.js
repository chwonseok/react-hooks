import { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default function UseEffectApp() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div>
      <div>Hey</div>
    </div>
  );
}

/* useEffect에 대한 기본
  export default function UseEffectApp() {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  const sayHello = () => console.log('Hello');
  useEffect(sayHello, [number]);

  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
} */
