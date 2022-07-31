import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "TOKEN_KEY";

setTokenHeader();

function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT());
}

export function createUser(userData) {
  return httpService.post("/users", userData);
}

export async function loginUser(credentials) {
  const { data } = await httpService.post("/auth", credentials);

  localStorage.setItem(TOKEN_KEY, data.token);
  setTokenHeader();
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export const userService = {
  createUser,
  loginUser,
  logoutUser,
  getJWT,
  getUser,
};

export default userService;
