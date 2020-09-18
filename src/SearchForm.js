import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {

  const [search, setSearch] = useState('');
  const [error, setError] = useState();
  const [done, setDone] = useState(false);
  

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(search)) {
      props.apiSearch(search)
      setSearch('')
      setDone(true)
    } else {
      setError("Please enter valid LinkedIn URL")
    }
  }

  const handleClick = () => {
    setError('')
  }

  function validate(search) {
    return search.includes("linkedin")
 }

  return (
    <div className={done ? "wrapperDone" : "wrapper"}>
      <div className="searchFormContainer">
        <form 
          className="form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input 
            className="search"
            type='text'
            value={search}
            onClick={handleClick}
            onChange={(e) => handleChange(e)}
          >
          </input>
          <input 
            className="submit"
            type='submit'
            value="Go"
          >
          </input>
        </form>
      </div>
        <p className="error">{error}</p>
    </div>
  );
}

export default SearchForm;