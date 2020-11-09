import React, { Component } from "react";
// import Search from "./Search";
import ResultTable from "./ResultTable";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    // search: "",
    results: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(res)
      })
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    // this.getEmployees(this.state.search);
  };



  render() {
    return (
      <ResultTable results={this.state.results} />
    );
  }
}

export default SearchResultContainer;