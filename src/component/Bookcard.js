import React from 'react'


function Bookcard(props) {
  return (
    <>
      {console.log(`images/booksImage/${props.book.bookImage}.jpg`)} 
            <div key={props.book.bookId} className="col-md-12 col-lg-4 mb-4 mb-lg-0" style={{ paddingBottom: '20px',paddingTop:'20px'}} >
              <div className="card">
                <img src={`images/booksImage/${props.book.bookImage}`} className="card-img-top" alt="Laptop" width="200px" height="450px" /> 
                <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Kitap Adı:</h5>
                    <h5 className="text-dark mb-0"><b>{props.book.bookName}</b></h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Çıkış Tarihi</h5>
                    <h5 className="text-dark mb-0"><b>{props.book.createdYear}</b></h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Yazar</h5>
                    <h5 className="text-dark mb-0"><b>{props.book.writer}</b></h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Tür</h5>
                    <h5 className="text-dark mb-0"><b>{props.book.type}</b></h5>
                  </div>                  
                </div>
              </div>
            </div>
  
    </>
  )
  
}
export default Bookcard;

/*
     
*/