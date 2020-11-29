import React from 'react'
import Book from './Book'

const bookList = [
    {title: 'The Power of Now'},  {title: 'The 4 Hour Workweek'}
]
export default function Books(){
    const [showBook, setShow] = React.useState(false);
    return(
        <div>
            {showBook && <Book name="Black Swan"/>}
            <button onClick={() => setShow(true)}>
                Show
            </button>

            {bookList.map(book => <Book title={book.title}/>)}
        </div>
    )
}