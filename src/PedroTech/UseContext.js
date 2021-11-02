import { createContext, useState } from 'react';
import { Login, User } from './UseContext-2';

export const AppContext = createContext(null);

const UseContext = () => {
  const [username, setUsername] = useState('');

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
};

export default UseContext;
