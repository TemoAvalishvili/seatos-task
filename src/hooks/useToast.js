import { useState, useCallback } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback(
    ({ status, title, message, position = "top-right", duration = 5000 }) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = { id, status, title, message, position };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    },
    []
  );

  return { toasts, showToast };
};

export default useToast;
