import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    radius: 4,
  },
  medium: {
    height: 12,
    radius: 4,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  
  if(!styles) {
    throw new Error(`Unknown size passed to Progress Bar: ${size}`)
  }

  return (
    <Wrapper  
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin="0" 
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px'
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{
          '--width': value + '%',
          '--height': styles.height + 'px'
         }} 
       />
       </BarWrapper>
    </Wrapper>
  )
};


const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar in near full */
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`

export default ProgressBar;
