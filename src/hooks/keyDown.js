import React from "react";

export const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, key]);
};
