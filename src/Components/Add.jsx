import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { uploadVideo } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({setUploadVideoServerResponse}) {

  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })
   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const embededLink=(e)=>{
        const {value}=e.target
        if(value){

          const link=`https://www.youtube.com/embed/${value.slice(-11)}`
          setVideo({...video,embedLink:link})
        }else{
          setVideo({...video,embedLink:""})
        }
        
  }
    
  
  const handleUpload=async()=>{
       let {id,caption,url,embedLink}=video
    
       if(!id||!caption||!url||!embedLink){
    
       toast.warning("Fill the form Completely")

      }else{

     // make api call
        const response=await uploadVideo(video)
          console.log("jaaaaaaaa",response)
        if(response.status>=200 && response.status<300){
          setUploadVideoServerResponse(response.data)
          toast.success("video uploaded sucessfully")
          // video reset
          setVideo({id:"",caption:"",url:"",embedLink:""})
          handleClose()
        }
        else{
        
          toast.error("Sorry your video does not upload due some network problem ")

        }
      }

      }


  return (
    <>
    
     <div className='d-flex align-items-center'>
      <h5>Upload New Video </h5>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
     

         <Form className='border border-secondary rounded p-3'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="enter your video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
        <Form.Control type="text" placeholder="enter your video caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Control type="text" placeholder="enter your video image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="enter your video youtube link" onChange={embededLink} />
      </Form.Group>
        </Form>


        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClo0se={100}/>
    </> 

   
  )
}

export default Add
