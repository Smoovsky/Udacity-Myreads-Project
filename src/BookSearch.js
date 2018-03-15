import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class BookSearch extends Component{
  state = {
    results:[]
  }
  updateQuery = (query)=>{
    BooksAPI.search(query).then((results)=>{
      this.setState({results});});
  }
  render(){
    let {results} = this.state;
    let {moveBooks} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search"></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
              />
          </div>
        </div>
        <div className="search-book-results">
          <ol className="books-grid">
          {results.length>0?(results.map((book)=>{
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
          );})):''}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
