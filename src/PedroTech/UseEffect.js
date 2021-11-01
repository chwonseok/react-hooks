import axios from 'axios';
import { useEffect, useState } from 'react';

const UseEffect = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data[0].email);
      console.log('API WAS CALLED');
    });
  }, []);

  return (
    <>
      <h1>Hello World {data}</h1>
    </>
  );
};

export default UseEffect;
