import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastArray } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toastArray?.map(({ id, message, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} toastVariant={variant}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
