import { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) element.current.addEventListener('click', onClick);
  }, []);
  return element;
};

export default function UseEffectApps() {
  const sayHello = () => console.log('Hello');
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

/* 1. useTitle
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default function UseEffectApps() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div>
      <div>Hey</div>
    </div>
  );
} */

/* useEffect에 대한 기본
  export default function UseEffectApps() {
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
