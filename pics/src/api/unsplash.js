import axios from "axios";
import config from "../config";

const accessKey = config.access_key;
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + accessKey
  }
}); //create an instance of axios clients
