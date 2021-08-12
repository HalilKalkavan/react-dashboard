import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class FirstClassComponent extends React.Component{
    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitude }),
            err => this.setState({ errorMessage : err.message})
          );
    }

    componentDidUpdate(){
        console.log('component just updated');
    }

    render() {
        if(!this.state.position){
            // return <div><h1>Latitude: {this.state.lat} </h1></div>;
            return <SeasonDisplay lat={this.state.lat} />;
        }
        else if (!this.state.err){
            return <div><h1>Error message: {this.state.errorMessage} </h1></div>;
        }
        
        return <div>Loading....</div>;
    }
}

export default FirstClassComponent;