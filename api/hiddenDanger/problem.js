import { request } from "../../utils/request.js";

const getProblem = function (data) {
  return request("api/services/app/Problem/getProblem", "GET", data)
};

const getProblemById = function (data) {
  return request("api/services/app/Problem/GetProblemById", "GET", data)
};

module.exports = {
  getProblem,
  getProblemById,
}