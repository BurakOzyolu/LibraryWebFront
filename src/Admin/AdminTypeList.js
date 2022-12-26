import React, { Component } from 'react'
import { variables } from './Variable';

export default class AdminTypeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booktypes: [],
      typeId: 0,
      typeName: "",
      modalTitle: ""
  }
  }
  
  refreshList() {

    fetch(variables.API_URL + 'Types/getall') 
        .then(response => response.json())
        .then(data => {
            this.setState({ booktypes: data });
        });
}

componentDidMount() {
  this.refreshList();
}

changeBookTypeName= (e) => {
  this.setState({ typeName: e.target.value });
}

addClick() {
  console.log("add click tıkland");
  this.setState({
      modalTitle: "Kitap Türü Ekle",
      booktypes: [],
      typeId: 0,
      typeName: ""
  });
  this.refreshList();
}

editClick(emp) {
  console.log("edit click tıkland");
  this.setState({
      modalTitle: "Kitap Türü Güncelle",
      typeId: emp.typeId,
      typeName: emp.typeName,
  });
}

createClick() {
  fetch(variables.API_URL + 'Types/add', { 
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        typeId:this.state.typeId,
        typeName: this.state.typeName
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
  fetch(variables.API_URL + 'Types/update' , {  
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          typeId: this.state.typeId,
          typeName: this.state.typeName,
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
      fetch(variables.API_URL + 'Types/delete/' + id, {
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
      booktypes,
      modalTitle,
      typeId,
      typeName
  } = this.state;

    return (
    <>

            <div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                        <b>  Kitap Türü Id</b> 
                        </th>
                        <th>
                          <b> Kitap Türü Adı</b> 
                        </th>
                        <th>
                         <b>  Seçenekler</b> 
                        </th>                 
                    </tr>
                </thead>
                <tbody>
                    {booktypes.map(emp =>
                        <tr key={emp.typeId}>
                            <td>{emp.typeId}</td>
                            <td>{emp.typeName}</td>
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
                                    onClick={() => this.deleteClick(emp.typeId)}>
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
                                        <span className="input-group-text">Kitap Türü Adı: </span>
                                        <input style={{marginLeft: '4px',backgroundColor:'white', border:'1px solid #333'}}
                                        type="text" 
                                        className="form-control"
                                            value={typeName}
                                            onChange={this.changeBookTypeName} />


                            {typeId === 0 ?
                                <button 
                                    style={{marginLeft: '4px'}}
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => this.createClick()}
                                >Yeni Kitap Türü Oluştur</button>
                                : null}

                            {typeId !== 0 ?
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
