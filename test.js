
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)

class test{
  constructor(){
    this.num = 1;
  }
  numplus(){
    this.num++;
  }
  numplustwice(){
    this.numplus();
    this.numplus();
  }
}


class test2{
  constructor(){
    this.num = 1;
  }
  numplus(){
    this.num++;
  }
  numplustwice(){
    this.numplus();
    this.numplus();
  }
  f1(){
    (()=>{
      (()=>{
        console.log(this)
      })()
    })()
  }
}
t1 = new test2()
t1.f1()

a = [1, 2, 3, 4]
step = 2
f = function(element, index, array, _step = step){
  console.log(element, step1);
}
a.forEach(f)

class test3{
  constructor(){
    this.state = {books:[{id:1, shelf:1},{id:2, shelf:2},{id:3, shelf:3}]};
  }
  setState(f1){
    this.state = f1(this.state);
  }
  bookChange(element, index, array, book, shelf){
    if(element.id == book.id){
      element.shelf = shelf;
    }
  }
  moveBooks(book, shelf){
    console.log(book, shelf);
    this.setState((state) => {
      return {books: state.books.foreach(this.bookChange(element, index, array, book = book, shelf = shelf))}
      console.log(state);
    })
  }
}
