import React from 'react'

class SearchBar extends React.Component {
    state = {
        myInput: ""
    }
    onChangeHandler = event => {
        this.setState({myInput: event.target.value})
    }
    onFormSubmitHanler = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.myInput);
    }

    render() {
        return(
            <div className= "search-bar ui segment" style={{ marginTop: "10px" }}>
                <h1 className="ui center aligned header">Youtube Video Search App</h1>
                <form action="" onSubmit={ this.onFormSubmitHanler } className="ui form">
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input type="text"
                        value = {this.state.myInput}
                        onChange = {this.onChangeHandler}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;