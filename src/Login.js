import React from "react";

import { useState } from "react";

const Login = () => {
  const [token, setToken] = useState("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          localStorage.setItem("token", token);
          window.location.reload();
        }}
      >
        <label>
          Token:
          <input
            type="text"
            name="token"
            value={token}
            onChange={e => {
              setToken(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
