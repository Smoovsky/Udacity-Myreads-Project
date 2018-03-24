import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';

function BookShelf(props){
  const {books} = props;
  const read = books.filter((x)=>{return x.shelf === 'read';});
  read.shelf = 'Read';
  const currentlyReading = books.filter((x)=>{return x.shelf === 'currentlyReading';});
  currentlyReading.shelf = 'Currently Reading';
  const wantToRead = books.filter((x)=>{return x.shelf === 'wantToRead';});
  wantToRead.shelf = 'Want to Read';
  const shelf = [read, currentlyReading, wantToRead];
  let {moveBooks} = props;

  return (

    <div className="list-books">
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {shelf.map((genre)=>{
            return(
              <div className='bookshelf' key={genre.shelf}>
                <h2 className="bookshelf-title">{genre.shelf}</h2>
                <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {genre.map((book)=>{
                      return (
                        <Book key={book.id} book={book} moveBooks={moveBooks}/>
                      );})}
                  </ol>
                </div>
              </div>
            );})}
        </div>
      </div>
      <div className='open-search'>
        <Link
          to="/search"
        >Add a book</Link>
      </div>
    </div>
  );
}

export default BookShelf;
