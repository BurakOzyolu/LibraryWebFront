import React, { useEffect, useState } from 'react'
import Bookcard from '../component/Bookcard';
import { variables } from '../Admin/Variable';

function BookList() {
    
    const [books, setbooks] = useState([]);

    useEffect(() => {

        fetch(variables.API_URL+ 'Book/getall')
            .then(res => res.json())
            .then(data => {
                setbooks(data);
            })
            
    }, [])

    return( 
          books && books.map((item,key) => {
                 return <Bookcard book={item}></Bookcard>
          })

    )
}

export default BookList

/*
<ul>
       
    </ul>
*/