import React from 'react';
import '../Styles/HeaderSearch.css'

 
export default function HeaderSearch (props) { 

  return (
    <header className='header'>
      <div className="search-input">
        <input 
          placeholder="Search" 
          className="search-input-text" 
          onChange={e => props.getTermAndSearch(e.target.value) }
        />    
      </div>
    </header>
  );

};
