import httpService from "./httpService";

const TOKEN_KEY = "token";

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function loginUser(credentials) {
  const response = await httpService.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, response.data.token);

  return response;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

const usersService = {
  createUser,
  loginUser,
  logout,
  getJWT,
};
export default usersService;
