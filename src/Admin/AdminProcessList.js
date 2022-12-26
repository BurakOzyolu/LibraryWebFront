import React, { Component } from 'react'
import { variables } from './Variable';

var date = new Date().getDate(); 

export default class AdminProcessList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          students: [],
          processes: [],
          books : [],
          processId: 0,
          studentName:"",
          bookName:"",
          modalTitle: ""
      }
    }

  
refreshList() {

        fetch(variables.API_URL + 'Student/getall')
            .then(response => response.json())
            .then(data => {
                this.setState({ students: data });
            });
    
        fetch(variables.API_URL + 'Process/getall')
            .then(response => response.json())
            .then(data => {
                this.setState({ processes: data });
            });

        fetch(variables.API_URL + 'Book/getall')
            .then(response => response.json())
            .then(data => {
                this.setState({ books: data });
            });

    }

componentDidMount() {
        this.refreshList();
    }

     changeBookName= (e) => {
        this.setState({ bookName: e.target.value });
      }
      
      changeStudentName = (e) => {
        this.setState({ studentName: e.target.value });
      }

  addClick() {
        console.log("add click tıkland");
        this.setState({
            modalTitle: "Öğrenci Ekle",
            students: [],
            processes: [],
            processId: 0,
            studentName: "",
            bookName:"",
            processDate: "",
        });
        this.refreshList();
      }
 
      createClick() {
        fetch(variables.API_URL + 'Process/add', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              bookName:this.state.bookName,
              studentName: this.state.studentName
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
      }

      deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + 'Process/return/' + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
        this.refreshList();
      }
      
  render() {
    const {
        students,
        processes,
        books,
        processId,
        studentName,
        bookName,
        modalTitle
     } = this.state;

    return (
        <>
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
                            Veriliş Tarihi
                        </th>
                        <th>
                            Seçenekler
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
                            <td>
                                <button type="button"
                                    className="btn btn-primary"
                                    style={{marginLeft: '4px'}}
                                    onClick={() => this.deleteClick(emp.processId)}>
                                        Teslim alındı
                                </button>
                                <button type="button"
                                     className="btn btn-success"
                                     style={{marginLeft: '4px'}}
                                     onClick={() => this.addClick()}>
                                      Yeni İşlem
                                 </button>                                

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="row">
          <h2 className="modal-title" style={{marginLeft: '12px'}}>{modalTitle}</h2>
          </div>
                          <div className="d-flex flex-row bd-highlight mb-3">
                              <div className="p-2">
                                  <div className="input-group mb-3">

                                  <span className="input-group-text">Kitap</span>
                                        <select className="form-select"
                                            onChange={this.changeBookName}
                                            value={bookName}>
                                            {books.map(dep =>
                                                <option key={dep.bookId}>
                                                    {dep.bookName}
                                                </option>)}
                                        </select>    

                                 <span className="input-group-text">Öğrenci</span>
                                        <select className="form-select"
                                            onChange={this.changeStudentName}
                                            value={studentName}>
                                            {students.map(dep =>
                                                <option key={dep.studentId}>
                                                    {dep.studentName}
                                                </option>)}
                                        </select>               

                          
                              <button 
                                  style={{marginLeft: '4px'}}
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => this.createClick()}
                              >İşlem Ekle</button>


                      </div>
                      </div>
                              </div>


      </>
    )
  }
}
