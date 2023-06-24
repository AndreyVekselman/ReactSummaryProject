import httpService from "./httpService";
import usersService from "./usersService";

export function getAll() {
  return httpService.get("/cards", {
    headers: {
      "x-auth-token": usersService.getJWT(),
    },
  });
}
