import jsonp from "common/js/jsonp";
import { options } from "./config";

export function getRecommend() {
  const url = "http://www.yinyuetai.com/mv/get-bigpic";
  const data = Object.assign(
    {},
    {
      source: "wap"
    }
  );
  return jsonp(url, data, options);
}
