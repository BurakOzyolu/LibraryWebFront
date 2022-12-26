import React, { Component } from 'react'
import { variables } from './Variable';

export default class AdminEndProcessList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processes: []
        }
      }

    refreshList() {

        fetch(variables.API_URL + 'Process/getendall')
            .then(response => response.json())
            .then(data => {
                this.setState({ processes: data });
            });
        }

        componentDidMount() {
            this.refreshList();
        }

  render() {
    const {
        processes
     } = this.state;

    return (
        <div>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Kitap Adı
                </th>
                <th>
                    Öğrenci Adı
                </th>
                <th>
                   Kitap Veriliş Tarihi
                </th>
                <th>
                  Kitap Teslim Tarihi
                </th>                
            </tr>
        </thead>
        <tbody>
         
            {processes.map(emp =>
                <tr key={emp.processId}>
                    <td>{emp.processId}</td>
                    <td>{emp.bookName}</td>
                    <td>{emp.studentName}</td>
                    <td>{emp.purchaseDate}</td>
                    <td>{emp.returnDate}</td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
    )
  }
}
