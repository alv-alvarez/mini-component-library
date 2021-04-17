import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log(displayedValue);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentational>
        <span>{displayedValue}</span>
        <Icon id="chevron-down" strokeWidth={2} size={24} />
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentational = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 400;

  border-radius: 8px;

  padding: 12px 16px;

  span {
    padding-right: 24px;
  }
  
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
