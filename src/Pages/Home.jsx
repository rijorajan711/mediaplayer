import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {

   const[uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})

  return (
   <>
    
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div>
            <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </div>
        <Link style={{textDecoration:"none", color:"white" }} to={"/watch_history"}><h5><i className="fa-solid fa-book-open-reader"></i> Watch History</h5></Link>
    </div>


    <div className='container-fluid mt-5  mb-5 w-100 d-flex gap-5 justify-content-between align-items-center'>

        <div className='allvideo col-lg-9'>
            <h3>All videos</h3>
            <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className='category col-lg-2'>
            <Category />
        </div>
    </div>

    


    



   </>
  )
}

export default Home
