import axios from "axios";
import { message } from "antd";

export default function ajaxReq(url, data = {}, method = "GET") {
  if (method == "GET") {
    return axios.get(url, { params: data });
  } else {
    return axios.post(url, data);
  }
}
