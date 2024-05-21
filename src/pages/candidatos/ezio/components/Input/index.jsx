import React, { memo } from "react";
import styles from "./styles";

const Input = memo(function Input({ label, error, ...props }) {
  return (
    <styles.Container error={error}>
      <label htmlFor="input" id="label">
        {label}
      </label>
      <input {...props} name="input" id={props.type} />
      {error && <span id="inputError">* {error}</span>}
    </styles.Container>
  );
});

export default Input;
