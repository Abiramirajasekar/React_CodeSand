import axios from "axios";

function fetchUsers(query, page) {
  if (!query) {
    return Promise.reject("query sshould be provided");
  }
  return axios.get("https://api.github.com/search/users", {
    params: { q: query }
  });
}
export { fetchUsers };
