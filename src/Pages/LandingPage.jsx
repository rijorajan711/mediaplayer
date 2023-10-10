import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateUrl=useNavigate()
  
    return (


   <>
   
   <Row className='mt-5 mb-5 align-items-center justify-content-center'>
     <Col></Col>   
     <Col lg={4}>
     <h3>Welcome to <span className='text-warning'>World Of Music</span></h3>
      <p style={{textAlign:"justify"}}>If you are looking for a short essay on music, then take a look at the short essay given in the following. This is created by the in-house exports of Vedantu keeping the understanding ability of the students. Those who are looking for references can look up to this following essay. It will be easy to figure out the pattern of how to write an essay on music. One can also download the Vedantu app to get access to the same file.</p>
      <button onClick={()=>navigateUrl("/home")} className='mt-5 btn btn-primary'>Get Started</button>
     </Col>
     <Col></Col>
     <Col lg={6}>
       
       <img className='ig-fluid w-50' src="https://media.tenor.com/11u8gg1tMs4AAAAM/music-rock.gif" alt="" />

     </Col>
     
   </Row>
   

   <div className='d-flex flex-column align-items-center jusstify-content-center mt-5 mb-5'>
    <h3>Feature</h3>
    <div className='mt-5 mb-5 d-flex justify-content-evenly w-100'>
    <Card style={{ width: '18rem' }}>
      <Card.Img height={"300px"} variant="top" src="https://i.gifer.com/7y8T.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img height={"300px"} variant="top" src="https://i.gifer.com/Yzg5.gif" />
      <Card.Body>
        <Card.Title>Categorise Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img height={"300px"} variant="top" src="https://i.pinimg.com/originals/95/2a/53/952a531e7265d50e5017248fe08dd6f1.gif" />
      <Card.Body>
        <Card.Title >Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
    </div>
   </div>



   <div className=' d-flex justify-content-evenly p-5 border-secondary align-items-betwewn gap-5 w-100 border rounded'>

   <div className='content me-5 col-lg-4'>
       <h3 className='text-warning mb-5' >Life travel With Music</h3>
       <h6 className='mb-3'><span className='fs-5 fw-bold '>Play Everthing:</span>communication. It has various forms, such as the internet, through which we can get updated news about the world in our grab just with a click of a finger. </h6>
       <h6 className='mb-3'><span className='fs-5 fw-bold '>Play Everthing:</span>communication. It has various forms, such as the internet, through which we can get updated news about the world in our grab just with a click of a finger. </h6>
       <h6 className='mb-3'><span className='fs-5 fw-bold '>Play Everthing:</span>communication. It has various forms, such as the internet, through which we can get updated news about the world in our grab just with a click of a finger. </h6>
   </div>
   <div className='videotag col-lg-4'>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/Gy_5ZRXU1L0?si=UlhK7GNakQPkRpdL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>

   </div>

   
   </>
  )
}

export default LandingPage
