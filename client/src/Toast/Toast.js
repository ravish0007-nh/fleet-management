import React from 'react';
import { useTimeout } from './useTimeout';

export const Toast = (props) => {
  useTimeout(props.close, 5000);

  return (
    <div className="border-2 rounded-md p-6">
      <div className="font-semibold">{props.children}</div>
    </div>
  );
};
