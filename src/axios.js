import axios from "axios";

const instance = axios.create({
  // baseURL: "https://tinder-clone-backend-4.herokuapp.com/",
  baseURL: "https://tinder-clone-4.herokuapp.com/"
});

export default instance;
