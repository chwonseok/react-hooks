import axios from 'axios';
import { useEffect, useState } from 'react';

const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return;

    let longestName = '';

    comments.forEach((comment) => {
      let currentName = comment.name;
      if (currentName.length > longestName.length) longestName = currentName;
    });

    console.log('This has been computed!');

    return longestName;
  };

  return (
    <>
      <h5>{findLongestName(data)}</h5>

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

export default UseMemo;
