import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  adornment: {
    color: '#ff0000',
    cursor: 'pointer',
    fontWeight: 'bolder',
  },
  svg: {
    width: 18,
    height: 18,
  },
};

const RemoveValue = (props: RemoveValueProps) => (
  <InputAdornment style={styles.adornment} position="end">
    <div aria-label="Remove the value" onClick={props.onClick}>
      <ClearIcon style={styles.svg} />
    </div>
  </InputAdornment>
);

export interface RemoveValueProps {
  onClick?: () => void;
}

export default RemoveValue;
