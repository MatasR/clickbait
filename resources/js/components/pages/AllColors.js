import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllColors extends Component {
    constructor() {
      super()
      this.state = {
        colors: []
      }
    }

    componentDidMount() {
      axios.get('/api/colors').then(response => {
        this.setState({
          colors: response.data
        })
      })
    }

    render () {
      const { colors } = this.state
      return (
        <div className="container bg-white shadow-sm mt-4 rounded p-0">
          <table className="table table-borderless table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Color</th>
                <th>Hex</th>
                <th>Wins</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {colors.map(color => (
                <tr>
                  <th>{color.id}</th>
                  <td>
                    <span className="badge bg-secondary p-3 px-4 m-0" ref={(el)=>{el.style.setProperty('background-color', color.hex, 'important')}}> </span>
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

export default AllColors
