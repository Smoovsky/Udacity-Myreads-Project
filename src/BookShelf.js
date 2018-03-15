import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BookShelf extends Component{
  render(){
    const {books} = this.props;
    const read = books.filter((x)=>{return x.shelf === 'read';});
    read.shelf = 'Read';
    const currentlyReading = books.filter((x)=>{return x.shelf === 'currentlyReading';});
    currentlyReading.shelf = 'Currently Reading';
    const wantToRead = books.filter((x)=>{return x.shelf === 'wantToRead';});
    wantToRead.shelf = 'Want to Read';
    const shelf = [read, currentlyReading, wantToRead];
    let {moveBooks} = this.props;

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
                          <li key={book.id}>
                          <div className='book'>
                            <div className='book-top'>
                              <div className='book-cover' style={{
                                width:'128px',
                                height:'193px',
                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                              }}>
                              </div>
                              <div className='book-shelf-changer'>
                                <select onChange={(e) => {moveBooks(book, e.target.value)}}>
                                  <option value="none" disabled="">Move to...</option>
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
                      );})}
                    </ol>
                  </div>
                </div>
              )})}
            </div>
          </div>
          <div className='open-search'>
            <Link
                to="/search"
              >Add a book</Link>
          </div>
        </div>
      )
  }
}

export default BookShelf
