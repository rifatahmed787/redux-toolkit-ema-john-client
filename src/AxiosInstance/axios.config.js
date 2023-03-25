import axios from "axios";

let URL;
switch (process.env.REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "https://react-ema-john-pagination-server.vercel.app/";
    break;
  case "PRODUCTION":
    URL = "https://productionserver.com/";
    break;
  default:
    URL = "https://react-ema-john-pagination-server.vercel.app/";
}
const instance = axios.create({
  baseURL: URL,
});
export default instance;
