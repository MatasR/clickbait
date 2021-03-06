import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Voting.css'

class Voting extends Component {

    constructor() {
      super()
      this.state = {
        colors: []
      }
    }

    loadNewColors(){
      axios.get('/api/colors?limit=2&order=random').then(response => {
        this.setState({
          colors: response.data
        })
      })
    }

    onVote(color){
      axios.put(`/api/colors/vote/${color}`).then(() => {this.loadNewColors()})
    }

    componentDidMount() {
      this.loadNewColors()
    }

    render(){
      return (
        <div className="bg-white shadow-sm mt-3 p-4">
          <div className="row">
            <div className="col-12 mb-2">
              <h2>Choose a better color</h2>
            </div>
            {this.state.colors.map(color => (
              <div key={color.id} className="col-6">
                <div onClick={() => this.onVote(color.id)} className="vote rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "16rem", backgroundColor: color.hex }}>
                  <h2 className="text-white display-5 font-weight-bold d-none d-sm-block">{color.hex}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
}

export default Voting
