import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'
import { variables } from './Variable';

export default class AdminBookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        writers: [],
        types: [],
        books: [],
        modalTitle: "",
        BookId: 0,
        BookName: "",
        Writer: "",
        Type: "",
        NumberofPages: 0,
        CreatedYear: 0,
        BookImage: "",
        PhotoPath: variables.PHOTO_URL
    }
}

refreshList() {

    fetch(variables.API_URL + 'Book/getall')
        .then(response => response.json())
        .then(data => {
            this.setState({ books: data });
        });

    fetch(variables.API_URL + 'Writers/getall')
        .then(response => response.json())
        .then(data => {
            this.setState({ writers: data });
        });

        fetch(variables.API_URL + 'Types/getall')
        .then(response => response.json())
        .then(data => {
            this.setState({ types: data });
        });        
}

componentDidMount() {
    this.refreshList();
}

changeBookName = (e) => {
    this.setState({ BookName: e.target.value });
}
changeCreatedYear = (e) => {
    this.setState({ CreatedYear: e.target.value });
}
changeType = (e) => {
    this.setState({ Type: e.target.value });
}
changeWriter = (e) => {
    this.setState({ Writer: e.target.value });
}
changeBookImage = (e) => {
    this.setState({ BookImage: e.target.value });
}

addClick() {
    this.setState({
        modalTitle: "Kitap Ekle",
        BookId: 0,
        BookName: "",
        Writer: "",
        Type: "",
        NumberofPages: 0,
        CreatedYear: 0,
        BookImage: "anonymous.png"
        /*
        writers: [],
        types: [],
        books: [],
        modalTitle: "",
        BookId: 0,
        BookName: "",
        Writer: "",
        Type: "",
        NumberofPages: 0,
        CreatedYear: 0,
        BookImage: "anonymous.png",
        PhotoPath: variables.PHOTO_URL
        */
    });
}
editClick(emp) {
    this.setState({
        modalTitle: "Kitap Düzenle",
        BookId: emp.bookId,
        BookName: emp.bookName,
        Writer: emp.writer,
        Type: emp.type,
        NumberofPages: emp.numberofPages,
        CreatedYear: emp.createdYear,
        BookImage: emp.bookImage
    });
}

//buralar düzenlenecek
createClick() {
    fetch(variables.API_URL + 'Book/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            BookName: this.state.BookName,
            Writer: this.state.Writer,
            Type: this.state.Type,
            CreatedYear: this.state.CreatedYear,
            BookImage:this.state.BookImage
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

//buralar düzenlenecek
updateClick() {
    fetch(variables.API_URL + 'Book/update', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            BookId : this.state.BookId,
            BookName: this.state.BookName,
            Writer: this.state.Writer,
            Type: this.state.Type,
            CreatedYear: this.state.CreatedYear,
            BookImage:this.state.BookImage
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
//buralar düzenlenecek
deleteClick(id) {
    if (window.confirm('Are you sure?')) {
        fetch(variables.API_URL + 'Book/delete/' + id, {
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
}
//buralar düzenlenecek
imageUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);

    fetch(variables.API_URL + 'employee/savefile', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            this.setState({ BookImage: data });
        })
}

render() {
    const {
        writers,
        types,
        books,
        modalTitle,
        BookId,
        BookName,
        Writer,
        Type,
        CreatedYear,
        PhotoPath,
        BookImage
    } = this.state;

    return (
        <div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Kitap Id
                        </th>
                        <th>
                            Kitap Adı
                        </th>
                        <th>
                            Yazar
                        </th>
                        <th>
                            Tür
                        </th>                        
                        <th>
                            Yıl
                        </th>                   
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(emp =>
                        <tr key={emp.bookId}>
                            <td>{emp.bookId}</td>
                            <td>{emp.bookName}</td>
                            <td>{emp.writer}</td>
                            <td>{emp.type}</td>
                            <td>{emp.createdYear}</td>
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
                                    onClick={() => this.deleteClick(emp.bookId)}>
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
                                        <span className="input-group-text">Kitap Adı: </span>
                                        <input style={{marginLeft: '4px',backgroundColor:'white', border:'1px solid #333'}}
                                        type="text" 
                                        className="form-control"
                                            value={BookName}
                                            onChange={this.changeBookName} />

                            <span className="input-group-text">Yazar</span>
                                        <select className="form-select"
                                            onChange={this.changeWriter}
                                            value={Writer}>
                                            {writers.map(dep =>
                                                <option key={dep.writerId}>
                                                    {dep.writerName}
                                                </option>)}
                                        </select>

                                        <span className="input-group-text">Tür</span>
                                        <select className="form-select"
                                            onChange={this.changeType}
                                            value={Type}>
                                            {types.map(dep =>
                                                <option key={dep.typeId}>
                                                    {dep.typeName}
                                                </option>)}
                                        </select>                                        

                                        <span className="input-group-text">Yıl</span>
                                        <input style={{marginRight: '10px',backgroundColor:'white', border:'1px solid #333'}}
                                        type="text" 
                                        className="form-control"
                                            value={CreatedYear}
                                            onChange={this.changeCreatedYear} />

                                        <span className="input-group-text">resim</span>
                                        <input style={{marginRight: '10px',backgroundColor:'white', border:'1px solid #333'}}
                                        type="text" 
                                        className="form-control"
                                            value={BookImage}
                                            onChange={this.changeBookImage} />                                            

                            {BookId === 0 ?
                                <button 
                                    style={{marginLeft: '10px'}}
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => this.createClick()}
                                >Yeni Kitap Türü Oluştur</button>
                                : null}

                            {BookId !== 0 ?
                                <button 
                                    style={{marginLeft: '10px'}}
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => this.updateClick()}
                                >Güncelle</button>
                                : null}
                        </div>
                        </div>
                                </div>

        </div>
    )
}
}

/*    

const handleLogin = (e) => {
      e.preventDefault();
        const data = {
            UserName : userName,
            Password : password
        }
        const url ='https://localhost:44314/api/Account/login';
        axios.post(url,data)
        .then((result)=> {
          const dt = result.data;
          if(dt.statusCode === 200){
            localStorage.setItem("admin", "admingiris");
            console.log(dt)
            navigate('/admin');
          }
          else{
            localStorage.setItem("admin", "girmedi");
            alert("Kullanıcı adı veya şifre yanlış")
            console.log(dt)
          }
        })
        .catch((error)=>{
          console.log(error);
        })
    }
     */