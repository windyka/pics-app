import React from 'react'
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const SwitchTheme = ({theme, setTheme}) => {
	return (
	<div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
	      <Typography style={{display: 'inline-block'}}>Dark Theme</Typography>
	      <Switch
	        checked={theme === 'dark'}
	        onChange={e => {setTheme(e.target.value)}}
	        value={theme === 'dark' ? 'light' : 'dark'}
	        color="primary"
	        inputProps={{ 'aria-label': 'primary checkbox' }}
	      />
      </div>
	)
}

export default SwitchTheme