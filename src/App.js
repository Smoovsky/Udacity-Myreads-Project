import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }
  moveBooks = (book, shelf) => {
      BooksAPI.update(book, shelf);
      let exist = this.state.books.filter(function(x){
        return x.id === book.id
      });
      if (exist.length === 0){
        this.setState((state) => {
          book.shelf = shelf;
          return {books: state.books.push(book)};
        });
      }
      this.setState((state)=>{
        return {books: state.books.map(function(element, index, array, _book = book, _shelf = shelf){
          if(element.id === _book.id){
            element.shelf = _shelf;
          }
          return element;
        })};
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
            <BookSearch
              moveBooks={this.moveBooks} />
          )}/>
          <Route exact path='/' render={() => (
              <BookShelf
                moveBooks={this.moveBooks}
                books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
