import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'INCREMENT')
    return { count: state.count + 1, showText: state.showText };
  if (action.type === 'toggleShowText')
    return { count: state.count, showText: !state.showText };
  else return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Click
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default UseReducer;
