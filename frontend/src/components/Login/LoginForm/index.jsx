import { useState } from "react";
import { StyledLoginForm } from "./styled";
import axios from "axios";

export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const userChangeHandler = (e) => {
    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/users/login", { ...user });
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
  };

  return (
    <StyledLoginForm>
      <form className="formSignup" action="" method="post" name="form">
        <label htmlFor="username">User Name</label>
        <input
          className="formStyling"
          type="text"
          name="username"
          value={user.username}
          onChange={userChangeHandler}
          placeholder=""
        />
        <label htmlFor="password">Password</label>
        <input
          className="formStyling"
          type="password"
          name="password"
          value={user.password}
          onChange={userChangeHandler}
          placeholder=""
        />
        <button className="btnSignup" onClick={onSubmitHandler}>
          Sign Up
        </button>
      </form>
    </StyledLoginForm>
  );
}
