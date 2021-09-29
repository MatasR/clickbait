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
      axios.get('/api/colors?'+(this.props.limit ? 'limit='+this.props.limit : '')+(this.props.order ? '&order='+this.props.order : '')).then(response => {
        this.setState({
          colors: response.data
        })
      })
    }

    render(){
      return (
        <div className="bg-white shadow-sm mt-3">
          {/* Title */}
          {this.props.title &&
            <>
              <h2 className="mt-3 ml-3 mb-0 float-left">Top 10 colors</h2>
              <Link to="/all-colors" className="float-right m-3">All Colors</Link>
            </>
          }
          {/* List */}
          <table className="table table-borderless table-striped table-hover">
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
      )
    }
}

export default List
