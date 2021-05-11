import jwt from "jsonwebtoken";

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
    return false;
  }
  return true;
};
