import React from "react";

function ResultTable(props) {
    return (
        <div className="container">

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Profile Picture</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map(result => (
                        <tr key={result.login.uuid}>
                            <td><img src={result.picture.medium}></img></td>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                            <th >{result.cell}</th>
                            <th >{result.email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
