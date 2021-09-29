import React from 'react'
import { Link } from 'react-router-dom'

function Voting() {
    return (
      <div className="bg-white shadow-sm mt-3 p-3">
        <div className="row">
          {/* Title */}
          <div className="col-12 mb-2">
            <h2>Choose a better color</h2>
          </div>
          {/* Left */}
          <div className="col-6 d-flex justify-content-center">
            <div className="rounded bg-info" style={{ width: "16rem", height: "16rem" }}></div>
          </div>
          {/* Right */}
          <div className="col-6 d-flex justify-content-center">
            <div className="rounded bg-warning" style={{ width: "16rem", height: "16rem" }}></div>
          </div>
        </div>
      </div>
    )
}

export default Voting
