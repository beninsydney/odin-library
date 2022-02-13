import { Component } from "react";
import "./Book.css"

export default class Book extends Component {
  constructor (props) {
    super()
    this.state = {
      book: props.book,
      removeBook: props.removeBook,
      toggleStatus: props.toggleStatus
    }
    this.toggleStatus = this.toggleStatus.bind(this)
    this.remove = this.remove.bind(this)
  }

  toggleStatus () {
    this.state.toggleStatus(this.state.book)
  }

  remove () {
    this.state.removeBook(this.state.book)
  }
  
  render () {
    console.log(this.state.book)
    return (
      <div className="book">
        <h2 className="book-title">{this.state.book.title}</h2>
        <span class="book-details">
          <span className="book-author">by {this.state.book.author}</span>
          <span className="book-status">read {this.state.book.read} / {this.state.book.pages} pages</span>
        </span>
        <menu className="book-options">
          <label onClick={this.toggleStatus}>
            <input type="checkbox" defaultChecked={this.state.book.completed === true ? 'checked' : ''} /> 
            Completed
          </label>
          <button onClick={this.remove}>Remove</button>
        </menu>
      </div>
    )
  }
}