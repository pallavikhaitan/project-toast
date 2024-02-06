import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import { ToastContext } from "../ToastProvider";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, toastVariant, children }) {
  const { dismissToast } = React.useContext(ToastContext);
  if (!toastVariant) {
    return null;
  }
  const Icon = ICONS_BY_VARIANT[toastVariant];
  return (
    <div className={`${styles.toast} ${styles[toastVariant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {" "}
        <VisuallyHidden>{toastVariant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
