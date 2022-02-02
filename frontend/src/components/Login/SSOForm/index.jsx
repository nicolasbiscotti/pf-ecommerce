import { useEffect, useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import axios from "axios";
import validateUser from "../utils/validate";
import { BsInfoCircle } from "react-icons/bs";
import { StyledButton } from "../Styled/StyledButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  REACT_APP_GITHUB_OAUTH_URL,
  REACT_APP_POST_PROXY_URL,
} from "../../../constants";
import {
  setMessage,
  deleteMessage,
  login,
} from "../../../redux/reducers/login/actions";

export default function SSOForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
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
        validateUser(newUser, ["username", "email"]).hasRequired
    );
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendGitHubCode = async (url) => {
    const newUrl = url.split("?code=");
    window.history.pushState({}, null, newUrl[0]);

    const proxyUrl = REACT_APP_POST_PROXY_URL + `?${url.split("?")[1]}`;

    // Use code parameter and other parameters to make POST request to proxy_server
    try {
      const { data } = await axios.post(proxyUrl, { ...user });
      if (data.jwt) {
        dispatch(login(data.jwt));
        dispatch(setMessage(data.message));
        navigate("/");
      } else {
        dispatch(setMessage(data.message));
        navigate("/login/ssoRegister");
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

        <StyledButton
          as="a"
          href={REACT_APP_GITHUB_OAUTH_URL}
          onClick={() => {
            dispatch(deleteMessage());
          }}
          disabled={disabled}
        >
          Create Account
        </StyledButton>
      </form>
    </StyledForm>
  );
}
