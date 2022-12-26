import React, { Component } from 'react'
import { variables } from './Variable';

export default class AdminWriterList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          writers: [],
          writerId: 0,
          writerName: "",
          modalTitle: ""
      }
      }

    refreshList() {

        fetch(variables.API_URL + 'Writers/getall') 
            .then(response => response.json())
            .then(data => {
                this.setState({ writers: data });
            });
    }
    
    componentDidMount() {
      this.refreshList();
    }
    //Burası düzenlenecek
    changeWriterName= (e) => {
      this.setState({ writerName: e.target.value });
    }
    
    addClick() {
      console.log("add click tıkland");
      this.setState({
          modalTitle: "Yazar Ekle",
          writers: [],
          writerId: 0,
          writerName: ""
      });
      this.refreshList();
    }

    editClick(emp) {
        console.log("edit click tıkland");
        this.setState({
            modalTitle: "Yazar Güncelle",
            writerId: emp.writerId,
            writerName: emp.writerName,
        });
      }
      
      createClick() {
        fetch(variables.API_URL + 'Writers/add', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              writerId:this.state.writerId,
              writerName: this.state.writerName
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
        fetch(variables.API_URL + 'Writers/update' , {  
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                writerId: this.state.writerId,
                writerName: this.state.writerName,
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
            fetch(variables.API_URL + 'Writers/delete/' + id, {
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
        writers,
        modalTitle,
        writerId,
        writerName
    } = this.state;

    return (
        <>

        <div>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>
                    <b>  Yazar Id</b> 
                    </th>
                    <th>
                      <b> Yazar Adı</b> 
                    </th>
                    <th>
                     <b>  Seçenekler</b> 
                    </th>                 
                </tr>
            </thead>
            <tbody>
                {writers.map(emp =>
                    <tr key={emp.writerId}>
                        <td>{emp.writerId}</td>
                        <td>{emp.writerName}</td>
                        <td>
                            <button type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => this.editClick(emp)}>
                                  Güncelle
                            </button>
                            
                            <button 
                            style={{marginLeft: '4px'}}
                                type="button"
                                className="btn btn-danger"
                                onClick={() => this.deleteClick(emp.writerId)}>
                                    Sil
                            </button>
                            <button style={{marginLeft: '4px'}}
                             type="button"
                              className="btn btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => this.addClick()}>
                                    Ekle
                             </button>
                        </td>
                        <td>

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
                                    <span className="input-group-text">Yazar Adı: </span>
                                    <input style={{marginLeft: '4px',backgroundColor:'white', border:'1px solid #333'}}
                                    type="text" 
                                    className="form-control"
                                        value={writerName}
                                        onChange={this.changeWriterName} />


                        {writerId === 0 ?
                            <button 
                                style={{marginLeft: '4px'}}
                                type="button"
                                className="btn btn-success"
                                onClick={() => this.createClick()}
                            >Yeni Yazar Oluştur</button>
                            : null}

                        {writerId !== 0 ?
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


        
</>
    )
  }
}
