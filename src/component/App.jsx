import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    images: []
  };

  // 1
  // console.log(term);
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
