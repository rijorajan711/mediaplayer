import { serverURL } from "./serverUrl"
import { commonAPI } from "./commonAPI"
//upload a video

export const uploadVideo = async(reqBody)=>{
    //make post http request to http://localhost:4000/videos to add video in json server and return response to "Add" coponent

    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}



//get all videos from json-server
export const getAllVideo =async ()=>{
  //make get http request to http://localhost:4000/videos to get all video from json server and return response to "View" coponent
  return await commonAPI("GET",`${serverURL}/videos`,"")
}



//get only one video from json server by using video id as a paramter
export const getAVideo=async(id)=>{
    //make get http request to http://localhost:4000/videos to only one video from json server and return response to "VideoCard" coponent
   return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}


//delete only one video from json server by using video id as a paramter
export const deleteAVideo=async(id)=>{
    //make get http request to http://localhost:4000/videos to only one video from json server and return response to "VideoCard" coponent
   return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

//store watching history to video history to json server

export const addToHistory=async(videoDetails)=>{
   //make post http requet to http://localhost:4000/history to add video history to json server and
  //  return response to videoCard component 

   return await commonAPI("POST",`${serverURL}/history`,videoDetails)

}


//delete watching history from video history from json server

export const deleteHistory=async(id)=>{
  //make delete http requet to http://localhost:4000/history/id to delete video history from json server and
 //  return response to hostory component 

  return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})

}

// get all watch history from json server
export const getAllHistory=async()=>{
// make a get http request to https://localhost:4000/history to get watch histoe=ry from json server
// and return response to Watch_history component
  return await commonAPI("GET",`${serverURL}/history`,"")
}


// add category to json server
export const addCategory=async(reqBody)=>{

  // make a post request to https://localhhost:400/categories  to add a category to json server 
  // and return a response to category response
  return await commonAPI("POST",`${serverURL}/categories`,reqBody)

}


// get all category from json server
export const getAllCategory =async()=>{
// make a get request too https://localhost4000/categories 
  return await commonAPI("GET",`${serverURL}/categories`,"")
}

export const deleteCategory=async(id)=>{

  return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})

}


// udate category to json server
export const updateCategory=async(id,body)=>{

  // make a put request to https://localhhost:400/categories/id  to update a category to json server 
  // and return a response to category response
  return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)

}



