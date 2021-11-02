import { useContext } from 'react';
import { AppContext } from './UseContext';

export const User = () => {
  const { username } = useContext(AppContext);
  return (
    <>
      <h1>User: {username}</h1>
    </>
  );
};

export const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
      />
    </>
  );
};
