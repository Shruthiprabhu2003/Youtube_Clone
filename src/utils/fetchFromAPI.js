import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// REACT_APP_RAPID_API_KEY='7109951b17msh07fa63a8b9dcedap1c2a15jsn75ed5d0fb3f2'
//process.env.REACT_APP_RAPID_API_KEY

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '7109951b17msh07fa63a8b9dcedap1c2a15jsn75ed5d0fb3f2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
 

  export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }

  