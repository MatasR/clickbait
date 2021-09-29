import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Voting from './Voting'
import List from '../../List'

class Home extends Component {
  render() {
    return (
      <div className="container">

        {/* Hero */}
        <div className="p-3 bg-white shadow-sm">
          <h1 className="display-4 fw-normal">Clickbait</h1>
          <p className="fs-5 text-muted mb-0">Find out the best color for your project</p>
        </div>

        {/* Voting */}
        <Voting />

        {/* Top10 */}
        <List title="Top 10 colors" limit="10" order="wins"/>

      </div>
    )
  }
}

export default Home
