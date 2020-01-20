
import React from "react";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="form-inline mx-auto" role="form">
      <div className="form-group">
        <input
          className="form-control heading-subtitle "
          id="Title"
          type="text"
          value={q}
          placeholder="Book Title..."
          name="q"
          onChange={handleInputChange}
          size="55"
          required
        />
      </div>
      <button
        onClick={handleFormSubmit}
        type="submit"
        className="btn btn-lg search-button heading-subtitle"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
