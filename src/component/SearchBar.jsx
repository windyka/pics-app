import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const SearchBar = (props) => {
    const [term, setTerm] = useState('')
    const onSubmitEvent = event => {
      event.preventDefault(event);
      props.onSubmit(term);
    };

    const styles = {
      segmentTheme: {
        backgroundColor: props.theme === 'dark' ? grey[800] : '',
      },
      inputTheme: {
        backgroundColor: props.theme === 'dark' ? grey[900] : '',
        color: props.theme === 'dark' ? 'white' : '',
      },
    };

    return (
      <div className="ui segment" style={styles.segmentTheme}>
        <form onSubmit={event => onSubmitEvent(event)} className="ui form">
          <div className="ui field"></div>
          <Typography>Search Pictures on here!</Typography>
          <input
            type="text"
            placeholder="Please type images by name and press enter"
            value={term}
            onChange={e => setTerm(e.target.value) }
            style={styles.inputTheme}
            autoFocus
          />
        </form>
      </div>
    );
}

export default SearchBar;
