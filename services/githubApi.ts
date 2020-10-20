const BASE_API = "https://api.github.com";

export const getUserList = (page = 8) =>
  fetch(`${BASE_API}/users?per_page=${page}`);
export const getUser = (id) => fetch(`${BASE_API}/users/${id}`);
export const getUserRepos = (id, page = 8) => {
  return fetch(`${BASE_API}/users/${id}/repos?per_page=${page}`);
};
