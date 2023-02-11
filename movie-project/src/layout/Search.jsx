import React from "react";


class Search extends React.Component {

    constructor() 
    {
        super();
        this.state = {
            search: '',
        };
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }

    render() {
        return ( 
            <div className="row">
                <input id="email_inline" 
                    placeholder="search"
                    type="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search:e.target.value})}
                    onKeyDown={this.handleKey}
                ></input>
                <button
                    onClick={() => (this.props.searchMovies(this.state.search))}
                    className="btn search-btn">Search</button>
          </div>
        )
    }
}


export {Search}