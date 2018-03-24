import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class BookSearch extends Component {
  state = {
    results: []
  };
  updateQuery = query => {
    if(query){
      BooksAPI.search(query).then(results => {
        if (Array.isArray(results)) {
          this.setState({results});
        } else {
          this.setState({results: []});
        }
      });
    }
  };
  render() {
    let { results } = this.state;
    let { moveBooks, books } = this.props;
    if(results.length > 0){
      results.forEach((result)=>{
        let inShelf = books.filter((book) => {
          return book.id === result.id;
        });
        if(inShelf.length > 0 ){
          result.shelf = inShelf[0].shelf;
        }else{
          result.shelf = 'none';
        }
      });
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-book-results">
          <ol className="books-grid">
            {results.length > 0
              ? results.map(book => {
                return (
                  <Book key={book.id} book={book} moveBooks={moveBooks}/>
                );
              })
              : ''}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
