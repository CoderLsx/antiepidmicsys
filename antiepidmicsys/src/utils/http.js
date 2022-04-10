import axios from "axios";
import qs from "qs";

const request = {
  // get请求
  get(config) {
    axios(config.url)
      .then((res) => {
        config.success(res);
      })
      .catch((err) => {
        config.fail(err);
      });
  },
  // post请求
  post(config) {
    axios
      .post(config.url, qs.stringify(config.data))
      .then((res) => {
        config.success(res);
      })
      .catch((err) => {
        config.fail(err);
      });
  },
  // delete请求
  delete(config) {
    axios
      .delete(config.url)
      .then((res) => {
        config.success(res);
      })
      .catch((err) => {
        config.fail(err);
      });
  },
  // put请求
  put(config) {
    axios
      .put(config.url, qs.stringify(config.data))
      .then((res) => {
        config.success(res);
      })
      .catch((err) => {
        config.fail(err);
      });
  },
};

export default request;
