import React, { useEffect, useState } from "react";
import { getAllCategory } from "../services/allAPI";
import VideoCard from "./VideoCard";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MoreCategory() {
  const [allCategory, setAllCategory] = useState([]);

  const handleCategory = async () => {
    const { data } = await getAllCategory();
    console.log("morecategoryyyyyyyyyyyyyy",data)
    setAllCategory(data);
  };
  useEffect(() => {
    handleCategory();
  }, []);

  return (
    <>
      <div className="mt=10 position-relative">
      <Link to={'/home'} className="position-absolute end-0 fs-4 text-decoration-none ">Back to Home</Link>
      {allCategory.length > 0 ? (
          allCategory.map((data) => (
          <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
              <h1>{data.categoryName}</h1>
            <Row className="border-bottom border-5 ">
              {data?.allVideo?.length > 0?
                data?.allVideo.map((card) => (
                  
                    <Col sm={3}>
                      <VideoCard
                        displayData={card}
                        inSideCategory={true}
                      ></VideoCard>
                    </Col>
                  
                )):<p className="fw-bolder fs-5 text-danger">This Category Is Empty</p>
            }
            </Row>
          </div>
        ))
      ) : (
          
          <p className="fw-bolder fs-5 text-danger">This Category Is Empty</p>
         
      )}
            </div>
    </>
  );
}

export default MoreCategory;
