import React, { useEffect } from 'react'
import { useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory,deleteCategory,getAllCategory,getAVideo, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


function Category() {
    const [categoryName,setCategoryName]=useState("")
    const [allCategories,setAllCategories]=useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getCategories=async()=>{
       
      const {data}=await getAllCategory()
      console.log(data)
      setAllCategories(data)

 } 

    const handleAddCategory=async()=>{
  
       if(categoryName){
        let body={
          categoryName,allVideo:[]
        }
        const response=await addCategory(body)
      

        if(response.status>=200 && response.status<300){
          handleClose()
          toast.warning("category add successfully")
          setCategoryName("")
          getCategories()
        }else{
          toast.error("pleaase provide ")
        }

       }else{
        toast.warning("please add a category")
       }

    }

 
  useEffect(()=>{
      getCategories()
  },[])

  const handleCategoryDelete=async(id)=>{
       console.log("categorydeleted id")
        await deleteCategory(id)
        await getCategories()
  }

   const dragOver=(e)=>{
          console.log("video drag over categiory")
           e.preventDefault()
   }

   const videoDrop=async (e,categoryId)=>{
              
    console.log("video droped inside the category id",categoryId)
    const videoId=e.dataTransfer.getData("videoId")
    console.log("video card Id",videoId)

    // get video detail
    const {data}=await getAVideo(videoId)
    // get category detail "allCategories" is an array by using find method we take the object which is similar to the dropped category id
    const selectedCategory=allCategories?.find(item=>item.id===categoryId)
    selectedCategory.allVideo.push(data)
    console.log("selected category",selectedCategory)
    // make api call to update categories in json server
     await updateCategory(categoryId,selectedCategory)
     getCategories()
  
   }

  return (

  <>
    <div >
     <button onClick={handleShow} className='btn btn-primary w-100'>Add category</button>
         <p className="fw-bolder fs-5 text-sucess">
            Drag & Drop Video <i className="fa-solid fa-arrow-down"></i>
          </p>
    </div>
    { 
         allCategories.length>0?allCategories?.map((item,index)=>(

        <div className='m-3 border-3 border rounded p-3' key={index} droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)} >
          <div className='d-flex justify-content-between align-items-center'>

        <h6>{item.categoryName}</h6>
        <button onClick={()=>handleCategoryDelete(item?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i> </button>
         <Link to={"/morecategory"} > <button  className='btn'>Show More </button></Link>
          </div>
        
          {/* <Row>
  
            {
                item?.allVideo?.length>0&&item?.allVideo.map(card=>(
                  <Col sm={6}> 
                  <VideoCard  displayData={card} inSideCategory={true}></VideoCard>
                   </Col>
                ))
    
            }
  
          </Row> */}
        </div>
  
        )):<p className='fw-bolder fs-5 text-danger'>Category is empty....</p>
      }
     
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
         
     <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Category name" onChange={(e)=>setCategoryName(e.target.value)} />
        </Form.Group>
         </Form>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClo0se={100}/>
  </>

     
  )
}

export default Category
