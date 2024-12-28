import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
