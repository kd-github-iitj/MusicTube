import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const fetch_video = async () => {
      const res = await axios.get(` /videos/${type}`)
      setVideos(res.data)
    }
    fetch_video();
  }, [type])
  return (
    <Container>
      {videos.map((video) => {
        return <Card key = {video.id} video = {video}/>
      })} 
    </Container>
  );
};

export default Home;
