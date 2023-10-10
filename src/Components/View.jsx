import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "../Components/VideoCard";
import { getAllVideo } from "../services/allAPI";

function View({ uploadVideoServerResponse }) {
  const [allVideo, setAllvideo] = useState([]);
  const getAllUploadedVideo = async () => {
    const { data } = await getAllVideo();
    setAllvideo(data);
  };

  const [deleteVideoResponseState, setDeleteVideoResponseState] = useState(null);

  useEffect(() => {
    getAllUploadedVideo();
    setDeleteVideoResponseState(null)
  }, [uploadVideoServerResponse, deleteVideoResponseState]);

  return (
    <div>
      <Row> 
        {allVideo.length > 0 ? (
          allVideo.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard
                setDeleteVideoResponseState={setDeleteVideoResponseState}
                displayData={video}
              />
            </Col>
          ))
        ) : (
          <p className="fw-bolder fs-5 text-danger">
            Sorry There is no Video For your search
          </p>
        )}
      </Row>
    </div>
  );
}

export default View;
