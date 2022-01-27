import { useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import axios from "axios";
import { BsInfoCircle } from "react-icons/bs";
import validateUser from "../utils/validate";
import { StyledButton } from "../Styled/StyledButton";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});

  const userChangeHandler = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(() => {
      return newUser;
    });
    setErrors(() => {
      const errors = {};
      for (const error of validateUser(newUser).errors) {
        errors[error.type] = error.message;
      }
      return errors;
    });
    setDisabled(
      () =>
        validateUser(newUser).errors.length > 0 ||
        validateUser(newUser, ["username", "password"]).hasRequired
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/users/login", { ...user });
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
  };

  return (
    <StyledForm>
      <form className="formSignup" action="" method="post" name="form">
        <label htmlFor="username">
          User Name
          {errors.username ? (
            <span className="errorHelp">
              <BsInfoCircle /> <span>{errors.username}</span>
            </span>
          ) : (
            " "
          )}
        </label>
        <input
          className="formStyling"
          type="text"
          name="username"
          value={user.username}
          onChange={userChangeHandler}
          placeholder=""
        />

        <label htmlFor="password">
          Password
          {errors.password ? (
            <span className="errorHelp">
              <BsInfoCircle /> <span>{errors.password}</span>
            </span>
          ) : (
            " "
          )}
        </label>
        <input
          className="formStyling"
          type="password"
          name="password"
          value={user.password}
          onChange={userChangeHandler}
          placeholder=""
        />

        <StyledButton onClick={onSubmitHandler} disabled={disabled}>
          Sign In
        </StyledButton>

        <StyledButton as={Link} to="register" backgroundcolor="#6c728d">
          Create an acount
        </StyledButton>
      </form>
    </StyledForm>
  );
}
