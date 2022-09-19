import React from "react";
import { fetchUsers } from "./fetchUsers";
const Github = () => {
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchUsers(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const handleSearch = (q = query) => {
    setIsLoading(true);
    setIsError(false);
    fetchUsers(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Github</h1>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <button disabled={isLoading} onClick={handleSearch}>
          {isLoading ? "loading" : "Search"}
        </button>
      </div>
      {isError ? "Please fill in text" : null}
      <div>
        {users?.map((item) => (
          <div key={item.id}>{item.login}</div>
        ))}
      </div>
    </>
  );
};
export { Github };
