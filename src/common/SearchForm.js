import React, { useState } from "react";
import "./SearchForm.css";

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
    <div className="SearchForm mb-4">

      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center gx-0">
          <div className="col-8 mr-1">
            <input
              className="form-control"
              name="searchTerm"
              placeholder="Enter search term.."
              value={term}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-md btn-primary">
              Search!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
