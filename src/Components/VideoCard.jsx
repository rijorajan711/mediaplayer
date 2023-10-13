import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { deleteAVideo } from '../services/allAPI';
import { addToHistory } from '../services/allAPI';

function VideoCard({setDeleteVideoResponseState,displayData,inSideCategory}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    // make api call to call to add video in history
    const {caption,embedLink}=displayData
    const watchedVideoDate=new Date()
    const timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(watchedVideoDate)
    let videoDetails={
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
  }
  const deleteItem=async(id)=>{
        //  video deleted api call
    const deleteVideoResponse=await deleteAVideo(id)
    console.log("deleteVideoResponseState",deleteVideoResponse)
        
    setDeleteVideoResponseState(deleteVideoResponse.data.statusText)
  }


  const dragStarted=(e,id)=>{
    console.log("card iiiiiiiddddddddddddd",id)
    e.dataTransfer.setData("videoId",id)
  }


  return (
    <>
    
    <div className='mt-5'>
       
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img  height={250} onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
        {
          
          inSideCategory?"":<button className='btn' onClick={()=>deleteItem(displayData?.id)}><i className="fa-solid fa-trash text-danger"></i></button> 
         } 
          </Card.Title>
      
 
      </Card.Body>
    </Card>

    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="526" src={`${displayData?.embedLink}?autoplay=1`} title="GANAPATH | Hindi Teaser | Amitabh B, Tiger S, Kriti S ❘ Vikas B, Jackky B | 20th Oct&#39; 23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      
      </Modal>

    </>
  )
}

export default VideoCard
