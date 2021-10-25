import { useState } from 'react';

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const value = event.target.value;
    let willUpdate = true;

    if (typeof validator === 'function') willUpdate = validator(value);
    // 1) validator func을 만들어 준 후, 그 조건을 만족한다면
    // 2) willUpdate = true가 됨
    // 3) 따라서 아래 조건은 자동만족되며 setValue(value)가 가능해짐
    if (willUpdate) setValue(value);
  };
  return { value, onChange };
};
