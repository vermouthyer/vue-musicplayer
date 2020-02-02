import originJSONP from "jsonp";

export default function jsonp(url, data, option) {
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        console.log(option);
        console.log(url);
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

function param(data) {
  let url = "";
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : "";
    console.log(k, value);
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : "";
}
