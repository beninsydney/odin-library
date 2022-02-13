import { Component } from "react"
import './AddBookForm.css'

export default class AddBookForm extends Component {
  constructor (props) {
    super()
    this.state = {
      addBook: props.addBook,
      cancelAdd: props.cancelAdd
    }
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onCancelForm = this.onCancelForm.bind(this)
  }

  onSubmitForm (event) {
    event.preventDefault()
    this.state.addBook({
      title: this.title.value,
      author: this.author.value,
      pages: this.pages.value,
      read: this.read.value
    })
  }

  onCancelForm () {
    this.state.cancelAdd()
  }

  render () {
    return (
      <form className="book-form">
        <input placeholder="Title" type="text" name="title" ref={ref => this.title = ref} />
        <input placeholder="Author" type="text" name="author" ref={ref => this.author = ref} />
        <div className="pages">
          <input placeholder="Read pages" type="number" name="read" min="1" max="100000" ref={ref => this.read = ref} />
          <input placeholder="Total pages" type="number" name="pages" min="1" max="100000" ref={ref => this.pages = ref} />
        </div>
        <div className="options">
          <button onClick={this.onSubmitForm}>Add book</button>
          <button onClick={this.onCancelForm}>Cancel</button>
        </div>
      </form>
    )
  }
}