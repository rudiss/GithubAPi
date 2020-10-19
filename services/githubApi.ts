const BASE_API = "https://api.github.com";

export const getUserList = () => fetch(`${BASE_API}/users`);
export const getUser = (id) => fetch(`${BASE_API}/users/${id}`);
export const getUserRepos = (id) => fetch(`${BASE_API}/users/${id}/repos`);
