import React from 'react';


const SearchBar = ({ onFormSubmit, onHandleChange, value }) => {
    return (
        <div className="card mt-2 shadow-sm bg-white rounded">
            <div className="card-body">
                <form onSubmit={onFormSubmit}>
                    <label htmlFor="video" className="form-label text-lg-left text-info h4">Search Video</label>
                    <input type="text" onChange={onHandleChange} value={value} id="video" className="form-control" />
                </form>
            </div>
        </div>
    )
}

export default SearchBar
