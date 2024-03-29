import React from "react";

function SearchForm(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="book-search">Search:</label>
                <input
                  type="text"
                  value={props.search}
                  onChange={props.handleInputChange}
                  className="form-control"
                  id="book-search"
                  placeholder="e.g. For Whom the Bell Tolls"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={props.handleFormSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
