import React from "react";
import { useKeyDown } from "../../hooks/keyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);

  const handleKeyDown = React.useCallback(() => {
    setToastArray([]);
  }, []);

  useKeyDown("Escape", handleKeyDown);

  const createToast = (message, variant) => {
    const newArray = [
      ...toastArray,
      { id: crypto.randomUUID(), message, variant },
    ];
    setToastArray(newArray);
  };

  const dismissToast = (id) => {
    const nextToasts = toastArray.filter((toast) => {
      return toast.id !== id;
    });

    setToastArray(nextToasts);
  };
  return (
    <ToastContext.Provider value={{ createToast, dismissToast, toastArray }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
