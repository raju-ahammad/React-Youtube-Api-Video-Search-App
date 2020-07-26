import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Api/youtube'



class App extends React.Component {
    onMyinputSubmit = myInput => {
        youtube.get("/search", {
            params: {
                q: myInput,
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyCaTdTsZ0wKDK_ijbf5zPLf6tpeXsXmECE"
              }
        })

    }
    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onMyinputSubmit}/>
            </div>
        );
    }
};

export default App;