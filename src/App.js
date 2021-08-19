import React from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import ApprovalCard from './Components/ApprovalCard';
import FirstClassComponent from './Components/FirstClassComponent';
// import SeasonDisplay from './Components/SeasonDisplay';

class App extends React.Component {
  state = { images: [] };

   onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', 
      {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID iTzHuBffLvGIH7i0AO282TYoh4Cj_2zGz0r2t_zVpUw',
        },
      }
    );

    console.log(term);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          guesswhtIam="Im the propsobject"
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
