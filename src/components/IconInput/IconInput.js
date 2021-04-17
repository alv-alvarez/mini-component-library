import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    height: 24,
    border: 1,
    iconSize: 16,
    stroke: 1,
  },
  large: {
    fontSize: 18,
    height: 36,
    border: 2,
    iconSize: 24,
    stroke: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to Progress Bar: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--iconSize": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.stroke} />
      </IconWrapper>
      <TextInput
        label={label}
        placeholder={placeholder}
        style={{
          "--height": styles.height / 16 + "rem",
          "--width": width + "px",
          "--fontSize": styles.fontSize / 16 + "rem",
          "--border": styles.border + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--iconSize);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);

  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;

  padding-left: var(--height);

  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
