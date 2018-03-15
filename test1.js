class test3{
  constructor(){
    this.state = {books:[{id:1, shelf:1},{id:2, shelf:2},{id:3, shelf:3}]};
  }
  setState(f1){
    this.state = f1(this.state);
  }
  moveBooks(book_t, shelf_t){
    console.log(book_t, shelf_t);
    this.setState((state) => {
      console.log(state);
      return {books: state.books.map(function(element, index, array, book = book_t, shelf = shelf_t){
        if(element.id == book){
          element.shelf = shelf;
        }
        return element;
      })};
    })
  }
}

let x = new test3()
x.moveBooks(1,2)
