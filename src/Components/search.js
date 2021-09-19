import React, { Component } from "react";
import { Container } from "react-bootstrap";
import data from "./Data.json";
import { FaAddressBook, FaBeer, FaSearch, FaTimes } from 'react-icons/fa';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchData: [],
      searchText: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
  }

  //handles lowercase intputs
  searchController(val, item) {
    return val.toLowerCase().includes(item.toLowerCase());
  }

  handleSearch(e) {
    const seachedItem = e.target.value;
    this.setState({ searchText: seachedItem });

    //filter out matches by title
    const newFilter = data.filter((value) => {
      if (this.searchController(value.title, seachedItem)) {
        return this.searchController(value.title, seachedItem);
      }
    });

    //if the input has value then add that value to searchData[]
    if (seachedItem === "") {
      this.setState({ searchData: [] });
    } else {
      this.setState({ searchData: newFilter });
    }
  }

  //clear/empty the input and the searchData[] arrar
  handleClearSearch() {
    this.setState({ searchData: [] });
    this.setState({ searchText: "" });
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <h1 className="title">Search Books</h1>
        </div>
        <Container className="d-flex justify-content-center mt-5">
          <div className="searchInputDiv">
            <input
              type="text"
              placeholder="Book Search"
              value={this.state.searchText}
              onChange={this.handleSearch}
              className="searchInput"
            />
            <div className="searchIcon">
                {this.state.searchData.length === 0 ? (
                 <FaSearch />
                ) : (
                  <FaTimes id="clearBtn" onClick={this.handleClearSearch} />
               
                )}
              </div>
          </div>

          {/*hides unmathced items*/}
          {this.state.searchData.length != 0 && (
            <div className="dataResult">
              {this.state.searchData.map((value, key) => {
                return (
                  <a className="dataItem" href={value.link}>
                    <p>
                      {value.title}
                      <br />
                      <small className="text-muted">{value.year}</small>
                    </p>
                  </a>
                );
              })}
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Search;
