import { useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import axios from "axios";
import validateUser from "../utils/validate";
import { BsInfoCircle } from "react-icons/bs";
import { StyledButton } from "../Styled/StyledButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../redux/reducers/messages/actions";

export default function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
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
        validateUser(newUser, [
          "username",
          "email",
          "password",
          "confirmpassword",
        ]).hasRequired
    );
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/users", { ...user });
      dispatch(setMessage(data.message));
      if (data.successfully) {
        navigate("/login");
      } else {
        navigate("/login/register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm>
      <form
        className="formSignup"
        autoComplete="off"
        action=""
        method="post"
        name="form"
      >
        <label htmlFor="username">
          User Name{" "}
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
        <label htmlFor="email">
          Email
          {errors.email ? (
            <span className="errorHelp">
              <BsInfoCircle /> <span>{errors.email}</span>
            </span>
          ) : (
            " "
          )}
        </label>
        <input
          className="formStyling"
          type="email"
          name="email"
          value={user.email}
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
        <label htmlFor="confirmpassword">
          Confirm password
          {errors.confirmpassword ? (
            <span className="errorHelp">
              <BsInfoCircle /> <span>{errors.confirmpassword}</span>
            </span>
          ) : (
            " "
          )}
        </label>
        <input
          className="formStyling"
          type="password"
          name="confirmpassword"
          value={user.confirmpassword}
          onChange={userChangeHandler}
          placeholder=""
        />
        <StyledButton onClick={onSubmitHandler} disabled={disabled}>
          Sign Up
        </StyledButton>

        <StyledButton
          onClick={() => navigate("/login")}
          backgroundcolor="#6c728d"
        >
          Login
        </StyledButton>
      </form>
    </StyledForm>
  );
}
