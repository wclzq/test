import { request } from "../../utils/request.js";

const getUsers = function (data) {
  return request("api/services/app/User/GetUsers", "GET", data)
};

module.exports = {
  getUsers,
}