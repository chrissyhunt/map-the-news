import React from 'react';

const SearchForm = (props) => {
  return (
    <form>
      <div class="form-element">
        <label for="startDate">Start Date:</label><br />
        <input type="date" name="startDate" />
      </div>
      <div class="form-element">
        <label for="endDate">End Date:</label><br />
        <input type="date" name="endDate" />
      </div>
      <div class="form-element">
        <label for="searchTerms">Topic or Phrase:</label><br />
        <input type="text" name="searchTerms" value="" class="search-box" />
      </div>
      <div class="form-element">
        <br />
        <input type="submit" value="Search" class="button" /><br />
      </div>
    </form>
  )
}

export default SearchForm;
