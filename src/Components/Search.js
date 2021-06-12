import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = { 
            display:''
         }
        
    }


 
    render() { 
        return ( 
        <div className='search'>
            <form>
              <input type='text' className='search-bar' onChange={this.props.onChange} spellcheck='false'>
              </input>
              <button type='submit' onClick={this.props.onSubmit} hidden>enter</button>
            </form>

        </div>
         );
    }
}
 
export default Search;