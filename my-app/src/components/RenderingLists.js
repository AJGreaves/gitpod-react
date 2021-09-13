import React from 'react';
import Book from './Book';

function RenderingLists() {
    const bookList = [
        'book title 1',
        'book title 2',
        'book title 3',
    ]

    const books = [
        {
            title:'book title 1',
            author: 'author one',
            pages: 281,
        },
        {
            title: 'book title 2',
            author: 'author two',
            pages: 663,
        },
        {
            title: 'book title 3',
            author: 'author three',
            pages: 229,
        }
    ]
    return (
        <div>
            {bookList.map(book => <h1 key={book}>{book}</h1>)}
            <hr/>
            {
                books.map(book => {
                    return (
                        <Book key={book.title} book={book} />
                    )
                })
            }
        </div>
    )
}

export default RenderingLists
