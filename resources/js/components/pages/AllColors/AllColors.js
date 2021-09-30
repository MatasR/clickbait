import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import List from '../../List'
import Pagination from './Pagination'

class AllColors extends Component {
    constructor() {
      super()
      this.state = {
        colors: [],
        currentColors: [],
        currentPage: 1,
        colorsPerPage: 100
      }
    }

    componentDidMount() {
      axios.get('/api/colors').then(response => {
        this.setState({
          colors: response.data
        })
        this.handlePaginationCalculations()
      })
    }

    handlePaginationCalculations() {
      const indexOfLastColor = this.state.currentPage * this.state.colorsPerPage
      const indexOfFirstColor = indexOfLastColor - this.state.colorsPerPage

      this.setState({
        currentColors: this.state.colors.slice(indexOfFirstColor, indexOfLastColor)
      })
    }

    // Called from pagination component
    changePage(newPage) {
      this.setState({
        currentPage: newPage
      }, () => { // Callback for After state is changed, cause setState is async
        this.handlePaginationCalculations()
      })
    }

    render () {
      return (
        <>
          <div className="container">
            <h2>All colors</h2>
            <div className="container p-0">
              <List colors={this.state.currentColors} />
            </div>
          </div>
          <Pagination colorsPerPage={this.state.colorsPerPage} totalColors={this.state.colors.length} changePage={this.changePage.bind(this)} />
        </>
      )
    }
}

export default AllColors
