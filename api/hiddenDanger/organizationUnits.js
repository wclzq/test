
import { request } from "../../utils/request.js";

const getOrganizationUnits = function (data) {
  return request("api/services/app/OrganizationUnit/GetOrganizationUnits", "GET", data)
};

module.exports = {
  getOrganizationUnits
}