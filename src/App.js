import React from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import ApprovalCard from './Components/ApprovalCard';
import FirstClassComponent from './Components/FirstClassComponent';
// import SeasonDisplay from './Components/SeasonDisplay';

const ct = function() {
  return 'click me';
}



class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID iTzHuBffLvGIH7i0AO282TYoh4Cj_2zGz0r2t_zVpUw',
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br></br>
        <button className="ui button">{ct()}</button>
        <br></br>
        <ApprovalCard />
        <br></br>
        <FirstClassComponent/>
        <br></br>
        {/* <SeasonDisplay /> */}
      </div>
    );
  }
}

export default App;
