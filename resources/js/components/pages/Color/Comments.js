import React, { Component } from 'react'

class Comments extends Component{
    constructor(){
      super()
      this.state = {
        comments: [],
        newCommentText: ''
      }
    }

    componentDidMount(){
      axios.get('/api/comments/'+this.props.color).then(response => {
        this.setState({
          comments: response.data
        })
      })
    }

    handleAddNewComment(){
      event.preventDefault()

      axios.post('/api/comments', {
        color: this.props.color,
        text: this.state.newCommentText
      }).then(response => {
        // Reset comment input text and add newly added comment to state array
        this.setState({
          newCommentText: '',
          comments: this.state.comments.concat(response.data)
        })
      })
    }

    handleDeleteComment(id){
      axios.post('/api/comments/destroy/'+id).then(() => {
        // Remove comment from state array
        this.setState({
          comments: this.state.comments.filter((comment) => {
            return comment.id !== id
          })
        })
      })
    }

    render(){
      return(
        <div className="bg-white shadow-sm rounded mt-3">

          {/* Title */}
          <h2 className="px-3 py-2 mb-0">Comments</h2>

          {/* Comments */}
          <ul className="list-group list-group-flush">
            {this.state.comments.map(comment => (
              <li className="list-group-item" key={comment.id}>
                {comment.text}
                <button onClick={() => this.handleDeleteComment(comment.id)} type="button" className="close" title="Delete comment">
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Add new comment */}
          <div className="container pb-3 mb-3">
            <form onSubmit={this.handleAddNewComment.bind(this)} className="input-group">
              <input className="form-control" type="text" value={this.state.newCommentText} onChange={(el) => {
                this.setState({newCommentText: el.target.value})
              }} />
              <div className="input-group-append">
                <button className="btn btn-primary">Add Comment</button>
              </div>
            </form>
          </div>

        </div>
      )
    }
}
export default Comments
