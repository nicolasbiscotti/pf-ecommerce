import { useState } from "react";
import { StyledRegisterForm } from "./styled";
import axios from "axios";

export default function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
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
    const { data } = await axios.post("/users", { ...user });
    if (data.user) alert(JSON.stringify(data.user));
    else alert(data.message);
  };

  return (
    <StyledRegisterForm>
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
        <label htmlFor="email">Email</label>
        <input
          className="formStyling"
          type="email"
          name="email"
          value={user.email}
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
        <label htmlFor="confirmpassword">Confirm password</label>
        <input
          className="formStyling"
          type="password"
          name="confirmpassword"
          value={user.confirmpassword}
          onChange={userChangeHandler}
          placeholder=""
        />
        <button className="btnSignup" onClick={onSubmitHandler}>
          Sign Up
        </button>
      </form>
    </StyledRegisterForm>
  );
}
