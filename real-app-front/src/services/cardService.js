import httpService from "./httpService";

export function getAll() {
  return httpService.get("/cards", {});
}
