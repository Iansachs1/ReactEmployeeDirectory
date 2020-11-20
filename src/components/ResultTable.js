import React, { Component } from "react";

import API from "../utils/API";
import Search from "./Search";
import compareNames from "../utils/compareNames";

export default class ResultTable extends Component {

    state = {
        results: [],
        direction: 1,
        search: "",
        filteredResults: []
    }

    componentDidMount() {
        this.getEmployees();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.search !== this.state.search) {
            if(this.state.search !== "") {
                const filteredRecords = this.state.results.filter(record => {
                    return record.name.first.toLowerCase().startsWith(this.state.search) 
                    || record.name.last.toLowerCase().startsWith(this.state.search);
                });
                this.setState({ filteredResults: filteredRecords })
            }
        }
    }

    getEmployees = () => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results })
                this.setState({ filteredResults: res.data.results })
                // console.log(this.state.results)
            })
            .catch(err => console.log(err))
    }

    // filterNames = () => {
    //     var filteredState = this.state.results.filter(record => {
    //         var firstName = record.name.first;
    //         firstName.startsWith(this.state.search);
    //     });
    //     this.setState({ results: fil})
    // }

    onFilterChange = (event) => {
        const {value} = event.target;
        console.log(value)
        this.setState({ search: value});
    };

    sortNames = () => {
        this.setState({ results: this.state.results.sort(compareNames(this.state.direction)) });
        this.setState({ filteredResults: this.state.filteredResults.sort(compareNames(this.state.direction)) });
        this.setState({ direction: (this.state.direction *= -1) });
    }



    render() {
        return (
            <div className="container">

                <Search
                    search={this.state.search}
                    onFilterChange={this.onFilterChange}
                />

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
                        {this.state.filteredResults.map(result => (
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
