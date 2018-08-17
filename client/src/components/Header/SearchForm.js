import React from 'react';

const SearchForm = (props) => {
  console.log('search form props: ', props)
  return (
    <form onSubmit={e => props.handleSearchSubmit(e)} >
      <div class="form-element">
        <label for="startDate">Start Date:</label><br />
        <input type="date" name="startDate" value={props.searchTerms.startDate} onChange={e => props.handleStartDateChange(e)} />
      </div>
      <div class="form-element">
        <label for="endDate">End Date:</label><br />
        <input type="date" name="endDate" value={props.searchTerms.endDate} onChange={e => props.handleEndDateChange(e)} />
      </div>
      <div class="form-element">
        <label for="searchTerms">Topic or Phrase:</label><br />
        <input type="text" name="searchTerms" class="search-box" value={props.searchTerms.q} onChange={e => props.handleSearchQueryChange(e)} />
      </div>
      <div class="form-element">
        <br />
        <input type="submit" value="Search" class="button" /><br />
      </div>
    </form>
  )
}

export default SearchForm;
