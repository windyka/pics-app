import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  // 1. OnChange Handler -------------------

  // onInputChange = event => {
  //   console.log(event.target.value);
  // };

  // ---------------------------------------

  onSubmitEvent = event => {
    event.preventDefault(event);

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onSubmitEvent(event)} className="ui form">
          <div className="ui field"></div>
          <label>Search Pictures</label>
          <input
            type="text"
            value={this.state.term}
            // onChange={this.onInputChange}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
