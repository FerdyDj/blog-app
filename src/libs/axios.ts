import axios from "axios";

const BASE_URL = "https://dynamicchannel-us.backendless.app/api";

export default axios.create({
  baseURL: BASE_URL,
});
