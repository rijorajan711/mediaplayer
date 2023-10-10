import React from 'react'
import { Link } from 'react-router-dom'

function Watch_history() {
  return (
  <>
   <div className="container mt-5 mb-5 d-flex justify-content-between">

   <h3>Watch History</h3>
   <Link style={{textDecoration:"none", color:"white"}} to={"/home"}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>

   </div>
   <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
            <th>#</th>
            <th>caption</th>
            <th>URL</th>
            <th>Time Stap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>This is your caption</th>
          <th>This is your URL</th>
          <th>This is ypur date</th>

        </tr>
      </tbody>

   </table>

  </>
  )
}

export default Watch_history
