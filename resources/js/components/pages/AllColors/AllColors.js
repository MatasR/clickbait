import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import List from '../../List'
import Pagination from './Pagination'

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
      return (
        <div className="container">
          <h2>All colors</h2>
          <div className="container p-0">
            <List colors={this.state.colors} />
            <Pagination />
          </div>
        </div>
      )
    }
}

export default AllColors
