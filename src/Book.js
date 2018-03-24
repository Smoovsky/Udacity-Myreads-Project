import React from 'react';

export default function Book({book, moveBooks}){
  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            width:'128px',
            height:'193px',
            backgroundImage: book.imageLinks?`url(${book.imageLinks.smallThumbnail})`:'url("http://books.google.com/books/content?id=U7VJCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")'
          }}>
          </div>
          <div className='book-shelf-changer'>
            <select value={book.shelf ? book.shelf : 'none'} onChange={(e) => {moveBooks(book, e.target.value);}}>
              <option value="nein" disabled="">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>
          {book.title}
        </div>
        <div className='book-authors'>
          {book.authors?(book.authors.join(',')):''}
        </div>
      </div>
    </li>
  );
}
