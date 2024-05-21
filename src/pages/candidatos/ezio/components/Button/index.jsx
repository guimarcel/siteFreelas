import React, { memo } from "react";
import styles from "./styles";

const Button = memo(function Button({ onClick, text, loading, ...props }) {
  return (
    <styles.Container
      type="button"
      onClick={onClick}
      loading={loading}
      disabled={loading}
      {...props}
    >
      <span>{loading ? "Carregando" : text}</span>
    </styles.Container>
  );
});

export default Button;
