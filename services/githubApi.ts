const BASE_API = "https://api.github.com";

// TODO: REMOVER TOKEN APOS TESTE DA ATLAS
export const getUserList = (page = 8) =>
  fetch(`${BASE_API}/users?per_page=${page}`, {
    headers: {
      Authorization: "token 6aaf717d5e1c968d6fdaf152cb27d9794ba4d54a",
    },
  });
export const getUser = (id) =>
  fetch(`${BASE_API}/users/${id}`, {
    headers: {
      Authorization: "token 6aaf717d5e1c968d6fdaf152cb27d9794ba4d54a",
    },
  });
export const getUserRepos = (id, page = 8) => {
  return fetch(`${BASE_API}/users/${id}/repos?per_page=${page}`, {
    headers: {
      Authorization: "token 6aaf717d5e1c968d6fdaf152cb27d9794ba4d54a",
    },
  });
};
