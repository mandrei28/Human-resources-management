export const storeToken = (rememberMe, token) => {
  if (rememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

export const getToken = () => {
  var token = localStorage.getItem("token");
  if (token !== null) {
    return token;
  } else {
    token = sessionStorage.getItem("token");
  }
  return token;
};

export const removeToken = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};
