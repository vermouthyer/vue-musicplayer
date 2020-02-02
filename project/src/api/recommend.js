import jsonp from "common/js/jsonp";
import { options, optionsForRecommendPlaylist } from "./config";

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

export function getDiscList() {
  const url = "http://www.yinyuetai.com/mv/get-playlist";
  const data = Object.assign(
    {},
    {
      size: 6
    }
  );
  return jsonp(url, data, options);
}
