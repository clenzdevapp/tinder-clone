import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8001"
  baseURL: "https://tinder-clone-backend-4.herokuapp.com/",
  // baseURL: "https://tinder-clone-4.herokuapp.com/"
});

export default instance;
