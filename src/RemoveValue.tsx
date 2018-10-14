import * as React from 'react';
import {Dictionary} from 'lodash';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';

const styles: Dictionary<React.CSSProperties> = {
    adornment: {
        color: '#ff0000',
        cursor: 'pointer',
        fontWeight: 'bolder'
    },
    svg: {
        width: 18,
        height: 18
    }
};

const FIRemoveValue = (props: FIRemoveValueProps) => (
    <InputAdornment style={styles.adornment} position='end'>
        <div aria-label='Remove the value' onClick={props.onClick}>
            <ClearIcon style={styles.svg}/>
        </div>
    </InputAdornment>
);

export interface FIRemoveValueProps {
    onClick?: () => void;
}

export default FIRemoveValue;
