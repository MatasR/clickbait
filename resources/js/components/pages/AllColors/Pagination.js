import React, { Component } from 'react'

class Pagination extends Component {
    constructor(){
      super()
      this.state = {
        pageNumbers: []
      }
    }

    // Calculate amount of pageNumbers
    // We should not use componentDidUpdate hook here i think
    componentDidUpdate(){
      // Only allow one time - if pageNumbers array is empty
      if(!this.state.pageNumbers.length){

        const newPageNumbers = []
        for(let i = 1; i <= Math.ceil(this.props.totalColors / this.props.colorsPerPage); i++)
          newPageNumbers.push(i)

        this.setState({pageNumbers: newPageNumbers})

      }
    }

    render(){
      return(
        <nav className="d-flex justify-content-center" aria-label="Page navigation example">
          <ul className="pagination">
            {this.state.pageNumbers.map(pageNumber => (
              <li key={pageNumber} className="page-item"><a className="page-link" href="#" onClick={() => this.props.changePage(pageNumber)}>{pageNumber}</a></li>
            ))}
          </ul>
        </nav>
      )
    }
}
export default Pagination
