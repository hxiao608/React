import axios from "axios";

//configure axios
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
