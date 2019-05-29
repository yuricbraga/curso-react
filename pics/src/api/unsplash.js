import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 352111f6e0811152f5009e1ab6d0ee59b5d838aedccf4064b8f5b056d24a9151"
  }
});
