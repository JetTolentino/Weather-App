import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    constructor(props){
        super(props);

    }


 
    render() { 
        return ( 
        <div className='search'>
            <form>
              <input type='text' className='search-bar' placeholder='Enter city name' onChange={this.props.onChange} spellCheck='false'>
              </input>
              <button type='submit' onClick={this.props.onSubmit} hidden>enter</button>
            </form>

        </div>
         );
    }
}
 
export default Search;