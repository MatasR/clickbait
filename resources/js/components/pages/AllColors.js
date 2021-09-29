import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import List from '../List'

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
        <div className="container">
          <h2>All colors</h2>
          <div className="container bg-white shadow-sm rounded p-0">
            <List order="wins"/>
          </div>
        </div>
      )
    }
}

export default AllColors
