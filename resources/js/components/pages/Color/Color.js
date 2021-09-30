import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'

class Color extends Component {
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

    render(){
      const color = this.state.color;

      return (
        <div className="container col-md-6">

          {/* Color code */}
          <div className="mb-3 rounded shadow-sm d-flex align-items-center justify-content-center" style={{ height: '16rem', backgroundColor: color.hex, boxShadow: "inset 0 0 5rem rgba(0, 0, 0, .15)" }}>
            <h2 className="text-white display-4 font-weight-bold">{color.hex}</h2>
          </div>
          {/* Color info */}
          <ul className="list-group list-group-flush rounded shadow-sm">
            <li className="list-group-item"><b>Wins:</b> {color.wins}</li>
            <li className="list-group-item">
              <b>Description:</b> {color.description}
              <Link to={"/color/"+color.id+"/edit"} className="btn btn-primary btn-sm float-right py-0 px-2">Edit</Link>
            </li>
          </ul>

          {/* Comments (check if color.id is loaded, so we could start loading its comments) */}
          {color.id &&
            <Comments color={color.id} />
          }

        </div>
      )
    }
}
export default Color
