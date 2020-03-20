import React from 'react';
import Switch from '@material-ui/core/Switch';

const Toggle = props => (
  <div>
    <Switch
      checked={props.darkMode}
      onChange={props.toggleHandler}
      name='toggle'
      color='grey'
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
  </div>
);

export default Toggle;
