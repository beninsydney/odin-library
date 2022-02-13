import { Component } from "react";
import AddBookForm from "./AddBookForm";
import Book from "./Book";

export default class Library extends Component {
  constructor () {
    super()
    this.state = {
      showBookForm: false,
      books: [{
        title: "It Ends With Us",
        author: "Colleen Hoover",
        read: 0,
        pages: 320
      }, {
        title: "Verity",
        author: "Colleen Hoover",
        read: 0,
        pages: 188
      }, {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        read: 0,
        pages: 294
      }, {
        title: "Ugly Love",
        author: "Colleen Hoover",
        read: 0,
        pages: 252
      }, {
        title: "The Maid",
        author: "Nita Prose",
        read: 0,
        pages: 419
      }, {
        title: "Red-Handed",
        author: "Peter Schweizer",
        read: 0,
        pages: 306
      }, {
        title: "The Body Keeps The Score",
        author: "Bessel van der Kolk",
        read: 0,
        pages: 193
      }, {
        title: "The Power of Regret",
        author: "Daniel H. Pink",
        read: 0,
        pages: 270
      }]
    }
    this.showNewBookForm = this.showNewBookForm.bind(this)
    this.cancelAdd = this.cancelAdd.bind(this)
    this.addBook = this.addBook.bind(this)
    this.removeBook = this.removeBook.bind(this)
    this.toggleStatus = this.toggleStatus.bind(this)
  }

  showNewBookForm () {
    this.setState({ showBookForm: true })
  }

  cancelAdd () {
    this.setState({ showBookForm: false })
  }

  addBook (book) {
    const books = this.state.books
    books.push(book)
    this.setState({ books, showBookForm: false })
  }

  removeBook (book) {
    const books = this.state.books
    const target = books.filter(entry => book.title === entry.title)[0]
    books.splice(books.indexOf(target), 1)
    this.setState({ books })
  }

  toggleStatus (book) {
    const books = this.state.books
    const target = books.filter(entry => book.title === entry.title)[0]
    target.completed = !!!target.completed
    if (target.completed) {
      target.read = target.pages
    }
    this.setState({ books })
  }

  render () {
    const bookForm = this.state.showBookForm ? <AddBookForm addBook={this.addBook} cancelAdd={this.cancelAdd} /> : (null)
    const addButton = bookForm ? (null) : <button onClick={this.showNewBookForm}>Add book</button>
    return (
      <div>
        <h1>Library</h1>
        {addButton}
        {bookForm}
        <ul class="books">
          {this.state.books.map(book => {
            return (
              <li key={book.title}>
                <Book book={book} toggleStatus={this.toggleStatus} removeBook={this.removeBook} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}