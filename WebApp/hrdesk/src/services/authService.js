import jwt from "jsonwebtoken";
import { removeToken } from "./storage";
export const isTokenValid = () => {
  var token = localStorage.getItem("token");
  if (token === null) {
    token = sessionStorage.getItem("token");
    if (token === null) {
      return false;
    }
  }
  var decodedToken = jwt.decode(token, { complete: true });
  var tokenExpDate = new Date(decodedToken.payload.exp * 1000);
  var dateNow = new Date();

  if (tokenExpDate < dateNow) {
    removeToken();
    return false;
  }
  return true;
};

export const userHasPermission = (permissions, permission) => {
  return permissions.includes(permission);
};
