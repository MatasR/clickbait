import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
    constructor() {
      super()
      this.state = {
        colors: []
      }
    }

    componentDidMount() {
      // If colors are not passed as prop - get them from api
      if(!this.props.colors){
        axios.get('/api/colors?'+(this.props.limit ? 'limit='+this.props.limit : '')+(this.props.order ? '&order='+this.props.order : '')).then(response => {
          this.setState({
            colors: response.data
          })
        })
      }
    }

    componentDidUpdate() {
      // This should run only one time, after colors are loaded in parent component
      // If colors are passed as prop - assign to state colors
      // Only allow if we do not already have the same colors array in state
      // (I believe this is the wrong way to solve this problem tho)
      if(this.props.colors && this.props.colors != this.state.colors)
        this.setState({colors: this.props.colors})
    }

    render(){
      return (
        <div className="bg-white shadow-sm my-3">
          {/* Title */}
          {this.props.title &&
            <>
              <h2 className="mt-3 ml-3 mb-0 float-left">{this.props.title}</h2>
              <Link to="/all-colors" className="float-right m-3">All Colors</Link>
            </>
          }
          {/* List */}
          <div className="table-responsive">
            <table className="table table-borderless table-striped table-hover mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Color</th>
                  <th>Hex</th>
                  <th>Wins</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {console.log(this.state.colors)}
                {this.state.colors.map(color => (
                  <tr key={color.id}>
                    <th>{color.id}</th>
                    <td>
                      <span className="badge bg-secondary p-3 px-4 m-0" ref={(el)=>{if(el){el.style.setProperty('background-color', color.hex, 'important')}}}> </span>
                    </td>
                    <td>{color.hex}</td>
                    <td>{color.wins}</td>
                    <td><Link to={"/color/"+color.id} className="btn btn-primary">Preview</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
}

export default List
