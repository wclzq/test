import { request } from "../../utils/request.js";

const authenticate = function (data) {
  return request("api/TokenAuth/Authenticate", "POST", data)
};

module.exports = {
  authenticate,
}