import React, { memo } from "react";
import styles from "./styles";

const DefaultContainer = memo(function DefaultContainer({ children }) {
  return <styles.Container>{children}</styles.Container>;
});

export default DefaultContainer;
