import React, { Component } from "react";

class DetailsTable extends Component {

    render() {
        const {  users } = this.props
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr style={{ color: "blue" }}>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Mark</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(users => (<tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name} </td>
                            <td>{users.totalMarks}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DetailsTable;