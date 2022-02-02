import { useEffect, useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import axios from "axios";
import { BsInfoCircle, BsGithub } from "react-icons/bs";
import validateUser from "../utils/validate";
import { StyledButton } from "../Styled/StyledButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons/lib";
import {
  REACT_APP_GITHUB_OAUTH_URL,
  REACT_APP_PROXY_URL,
} from "../../../constants";
import {
  deleteMessage,
  login,
  setMessage,
} from "../../../redux/reducers/login/actions";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(deleteMessage());
    try {
      const { data } = await axios.post("/users/login", { ...user });
      if (data.jwt) {
        dispatch(login(data.jwt));
        dispatch(setMessage(data.message));
        navigate("/");
      } else {
        dispatch(setMessage(data.message));
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendGitHubCode = async (url) => {
    const newUrl = url.split("?code=");
    window.history.pushState({}, null, newUrl[0]);

    const proxyUrl = REACT_APP_PROXY_URL + `?${url.split("?")[1]}`;

    // Use code parameter and other parameters to make POST request to proxy_server
    try {
      const { data } = await axios.get(proxyUrl);
      if (data.jwt) {
        dispatch(login(data.jwt));
        dispatch(setMessage(data.message));
        navigate("/");
      } else {
        dispatch(setMessage(data.message));
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    const hasError = url.includes("?error");

    // If Github API returns the code parameter
    if (hasCode) {
      sendGitHubCode(url);
    } else if (hasError) {
      dispatch(
        setMessage({
          text: "Sorry! Login via GitHub has failed!",
          type: "danger",
        })
      );
    }
  }, []);

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
          Login
        </StyledButton>

        <StyledButton
          as="a"
          href={REACT_APP_GITHUB_OAUTH_URL}
          onClick={() => {
            dispatch(deleteMessage());
          }}
          backgroundcolor="#131212"
        >
          {" "}
          <IconContext.Provider value={{ className: "icon" }}>
            <div className="iconTextButton">
              <BsGithub />
              Login via GitHub
            </div>
          </IconContext.Provider>
        </StyledButton>

        <StyledButton
          onClick={() => {
            dispatch(deleteMessage());
            navigate("register");
          }}
          backgroundcolor="#6c728d"
        >
          Create an acount
        </StyledButton>
      </form>
    </StyledForm>
  );
}
