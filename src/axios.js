import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-clone-d5d57.cloudfunctions.net/api",
  //baseURL: http://localhost:5001/clone-d5d57/us-central1/api,
});

export default instance;
