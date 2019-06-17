import axios from "axios";

const KEY = "AIzaSyCMInJ6rRhp2dU8IYWFXtmae16tOvOohYg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
