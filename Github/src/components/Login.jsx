import React from "react";
import { loginUser } from "./loginUser";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    loginUser({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  if (isAuth) {
    return (
      <div>
        <h1>welcome to dashboard</h1>
        <h1>Token{token}</h1>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      {isError && "something went wrong"}
      <div>
        <lable>
          Email:
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </lable>
      </div>
      <div>
        <lable>
          Password:
          <input
            typr="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </lable>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
export { Login };
