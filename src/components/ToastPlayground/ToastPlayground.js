import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);

  const [text, setText] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");

  const handleSubmit = (event) => {
    event.preventDefault();
    createToast(text, toastVariant);
    setText("");
    setToastVariant("");
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <label htmlFor={`variant-${variant}`} key={variant}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    onChange={(event) => {
                      setToastVariant(event.target.value);
                    }}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
