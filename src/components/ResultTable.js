import React, { Component } from "react";

import API from "../utils/API";
import Search from "./Search";
import compareNames from "../utils/compareNames";

export default class ResultTable extends Component {

    state = {
        results: [],
        direction: 1,
        search: ""
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results })
                this.setState({})
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   // this.getEmployees(this.state.search);
    // };

    sortNames = () => {
        this.setState({ results: this.state.results.sort(compareNames(this.state.direction)) });
        this.setState({ direction: (this.state.direction *= -1) });
    }


    render() {
        return (
            <div className="container">

                <Search searchResult={this.state.results} />

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Profile Picture</th>
                            <th scope="col">
                                <button
                                    onClick={this.sortNames}
                                    style={{
                                        border: "none",
                                        backgroundColor: "inherit",
                                        color: "white"
                                }}>
                                    <strong>Name</strong>
                                </button>
                            </th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(result => (
                            <tr key={result.login.uuid}>
                                <td><img src={result.picture.medium}></img></td>
                                <td>{result.name.first} {result.name.last}</td>
                                <th >{result.cell}</th>
                                <th >{result.email}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
