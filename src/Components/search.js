import React, { Component } from "react";
import { Container } from "react-bootstrap";
import data from "./Data.json";

class Search extends Component {
  render() {
    return (
      <div>
        <Container className="d-flex justify-content-center mt-5">
          <div>
            <input
              type="text"
              placeholder="Search"
              // value={this.state.searchText}
              // onChange={this.handleSearchAsset}
              className="searchInput"
            />
          </div>
          <div>
            {data.map((value, key) => {
              return (
                <a href="/">
                  <p>
                    {value.title}
                    <br />
                    <small className="text-muted">{value.year}</small>
                  </p>
                </a>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Search;
