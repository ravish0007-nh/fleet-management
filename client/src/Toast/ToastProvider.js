import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from './ToastContext';
import { Toast } from './Toast';

function generateUEID() {
  return Math.random() * 46656
}

export const ToastProvider = (props) => {
  const [toasts, setToasts] = useState([]);
  const open = (content) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ]);
  const close = (id) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="absolute bottom-2 right-2 space-y-3">
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
