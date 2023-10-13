import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory,deleteHistory} from '../services/allAPI'

function Watch_history() {
    const [history,setHistory]=useState([])
   const handleHistory=async()=>{

    const {data}=await getAllHistory()
    setHistory(data)
    
  }
  console.log("watch history ======",history)

   useEffect(()=>{
    handleHistory()
   },[])

  const deleteHistoryVideo=async(id)=>{
          await deleteHistory(id)
           handleHistory()
  }

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
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
       
       {
          history.length?history?.map((item,index)=>(

          <tr key={index}>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
          <td>{item.timeStamp}</td>
          <td><button className='btn' onClick={()=>deleteHistoryVideo(item?.id)}> <i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
          )):<p className='fw-bolder fs-5 text-danger'>Your history is empty....</p>
        
          }

      
      </tbody>

   </table>

  </>
  )
}

export default Watch_history
