import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos } from "./Videos"
import { ChannelCard } from "./ChannelCard"
import { fetchFromAPI } from "../utils/fetchFromAPI"

export const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  //to get /channel/id from the link we use 'useParams()'
  const { id } = useParams();

  useEffect(() => {
    //fetching channel content i.e view count,subscribers
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]))

    //fetching videos for respective channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,78,91,1) 35%, rgba(0,212,255,1) 100%)",zIndex:10,height:"300px"}} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        {/* passing margin top as prop so we can reuse the ChannelCard without disturbing the card on main page */}
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{mr:{sm:"100px"}}} />
          <Videos videos={videos} />
       

      </Box>
    </Box>
  )
}