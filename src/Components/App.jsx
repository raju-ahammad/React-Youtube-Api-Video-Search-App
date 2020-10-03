import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        value: ""
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onValueSubmit = async value => {
        const KEY = "AIzaSyBQetir9VNYA0rrx7_bDimuNDdwPovTCK8";
        const video = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        })
        
        const response = await video.get('/search', {
            params: {
                q: value
            }
        })
        console.log(response);
        
    };

    onFormSubmit = (e) => {
        console.log("Herllo");
        e.preventDefault()
        this.onValueSubmit(this.state.value)
    }

    render() {
        return (
            <div className='container'>
                <SearchBar onFormSubmit={this.onFormSubmit} onHandleChange = {this.handleChange} value={this.state.value}/>
            </div>
        );
    }
};

export default App;