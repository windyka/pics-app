import React, {useState} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SwitchTheme from './SwitchTheme'

const App = () => {
  const [images, setImages] = useState([])
  const [theme, setTheme] = useState('dark')

  const MuiTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  });

  const onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    setImages(response.data.results)
  };

   return (
    <MuiThemeProvider theme={MuiTheme}>
      <CssBaseline>
        <div className="ui container" style={{ marginTop: '20px' }}>
          <SwitchTheme theme={theme} setTheme={setTheme} />
          <SearchBar onSubmit={onSearchSubmit} theme={theme}/>
          <ImageList images={images} />
        </div>
      </CssBaseline>
     </MuiThemeProvider>
    );
}

export default App;
