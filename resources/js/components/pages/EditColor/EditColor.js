import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EditColor extends Component {
    constructor(){
      super()
      this.state = {
        color: {}
      }
    }

    componentDidMount(){
      const colorId = this.props.match.params.id

      axios.get('/api/color/'+colorId).then(response => {
        this.setState({
          color: response.data
        })
      })
    }

    handleDescriptionChange(el){
      let newDesc = el.target.value
      this.setState(prevState => {
        return {
          color: {
            ...prevState.color,
            description: newDesc
          }
        }
      })
    }

    handleSubmitNewDescription(){
      axios.post('/api/color/'+this.state.color.id+'/edit',{
        description: this.state.color.description
      }).then(
        // Redirect back to color page
        this.props.history.goBack()
      )
    }

    render(){
      const color = this.state.color;

      return (
        <div className="container col-md-6">

          {/* Back button */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/color/"+color.id}>Back</Link>
              </li>
            </ol>
          </nav>

          {/* Color code */}
          <div className="mb-3 rounded shadow-sm d-flex align-items-center justify-content-center" style={{ height: '16rem', backgroundColor: color.hex, boxShadow: "inset 0 0 5rem rgba(0, 0, 0, .15)" }}>
            <h2 className="text-white display-4 font-weight-bold">{color.hex}</h2>
          </div>
          {/* Color info */}
          <div className="p-3 bg-white rounded shadow-sm form-group">
            <label htmlFor="description">Edit description:</label>
            <textarea className="form-control mb-2" id="description" value={color.description} onChange={this.handleDescriptionChange.bind(this)}></textarea>
            <button className="btn btn-primary" type="submit" onClick={this.handleSubmitNewDescription.bind(this)}>Save</button>
          </div>

        </div>
      )
    }
}
export default EditColor
