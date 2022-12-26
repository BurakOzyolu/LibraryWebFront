import React, { Component } from 'react'
import { variables } from './Variable';

export default class AdminStudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      grades: [],
      studentId: 0,
      studentName: "",
      Grade:"",
      modalTitle: ""
  }
  }
  
  refreshList() {

    fetch(variables.API_URL + 'Student/getall')
        .then(response => response.json())
        .then(data => {
            this.setState({ students: data });
        });

    fetch(variables.API_URL + 'Grade/getall')
        .then(response => response.json())
        .then(data => {
            this.setState({ grades: data });
        });
}

componentDidMount() {
  this.refreshList();
}

changeStudentName= (e) => {
  this.setState({ studentName: e.target.value });
}

changeGrade = (e) => {
  this.setState({ Grade: e.target.value });
}

addClick() {
  console.log("add click tıkland");
  this.setState({
      modalTitle: "Öğrenci Ekle",
      students: [],
      Grade:"",
      studentId: 0,
      studentName: ""
  });
  this.refreshList();
}

editClick(emp) {
  console.log("Edit tıklandı");
  this.setState({
      modalTitle: "Öğrenci Güncelle",
      studentId: emp.studentId,
      studentName: emp.studentName,
      Grade: emp.Grade
  });
}

createClick() {
  fetch(variables.API_URL + 'Student/add', { 
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentId:this.state.studentId,
        studentName: this.state.studentName,
        GradeName : this.state.Grade
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

updateClick() {
  fetch(variables.API_URL + 'Student/update' , {  
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        GradeName: this.state.Grade
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
      fetch(variables.API_URL + 'Student/delete/' + id, {
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

render()
{
 const {
   modalTitle,
   grades,
   Grade,
   students,
   studentId,
   studentName
} = this.state;

return (
  <>


        <div>
        <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Öğrenci Id
                        </th>
                        <th>
                            Öğrenci Adı
                        </th>
                        <th>
                            Bölüm
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                 
                    {students.map(emp =>
                        <tr key={emp.studentId}>
                            <td>{emp.studentId}</td>
                            <td>{emp.studentName}</td>
                            <td>{emp.gradeName}</td>
                            <td>
                                <button type="button"
                                    className="btn btn-primary"
                                    style={{marginLeft: '4px'}}
                                    onClick={() => this.editClick(emp)}>
                                        Güncelle
                                </button>

                                <button type="button"
                                    className="btn btn-danger"
                                    style={{marginLeft: '4px'}}
                                    onClick={() => this.deleteClick(emp.studentId)}>
                                        Sil
                                </button>
                                <button type="button"
                                     className="btn btn-success"
                                     style={{marginLeft: '4px'}}
                                     onClick={() => this.addClick()}>
                                     Ekle
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
                                      <span className="input-group-text">Öğrenci Adı </span>
                                      <input style={{marginLeft: '4px',backgroundColor:'white', border:'1px solid #333'}}
                                      type="text" 
                                      className="form-control"
                                          value={studentName}
                                          onChange={this.changeStudentName} />

                                 <span className="input-group-text">Bölüm</span>
                                        <select className="form-select"
                                            onChange={this.changeGrade}
                                            value={Grade}>
                                            {grades.map(dep =>
                                                <option key={dep.gradeId}>
                                                    {dep.gradeName}
                                                </option>)}
                                        </select>               

                          {studentId === 0 ?
                              <button 
                                  style={{marginLeft: '4px'}}
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => this.createClick()}
                              >Öğrenci Ekle</button>
                              : null}

                          {studentId !== 0 ?
                              <button 
                                  style={{marginLeft: '4px'}}
                                  type="button"
                                  className="btn btn-primary "
                                  onClick={() => this.updateClick()}
                              >Güncelle</button>
                              : null}
                      </div>
                      </div>
                              </div>

                              </div>
   


          
  </>
  )
}
}
