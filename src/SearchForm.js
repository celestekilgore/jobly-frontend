import React, { useState } from "react";

/** Form for searching.
 *
 * State:
 * - term: search term string
 *
 * Props:
 * - search: function to call in parent
 *
 * { CompanyListPage, JobListPage } -> SearchForm
 */
function SearchForm({ search }) {

  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term.trim());
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
}

export default SearchForm;
