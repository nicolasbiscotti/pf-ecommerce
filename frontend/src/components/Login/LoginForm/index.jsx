import { useEffect, useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import axios from "axios";
import { BsInfoCircle, BsGithub } from "react-icons/bs";
import validateUser from "../utils/validate";
import { StyledButton } from "../Styled/StyledButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons/lib";
import GoogleLogin from "react-google-login";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_OAUTH_URL,
  REACT_APP_GITHUB_OAUTH_URL,
} from "../../../constants";
import {
  deleteMessage,
  fetchAuth,
  setGitHubCode,
  setGoogleData,
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
    dispatch(
      fetchAuth({
        proxyURL: "/users/login",
        userData: { ...user },
        onFinish: "/",
        onFailure: "/login",
        navigate,
      })
    );
  };

  // handle google login callback
  const handleGoogleLogin = async (response) => {
    console.log(response);
    const { data } = await axios.post(GOOGLE_OAUTH_URL, {
      token: response.tokenId,
    });
    dispatch(setGoogleData(data));
  };

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    const hasError = url.includes("?error");

    // If Github API returns the code parameter
    if (hasCode) {
      const gitHubCode = url.split("?")[1];
      dispatch(setGitHubCode(gitHubCode));
      dispatch(
        fetchAuth({
          proxyURL: "/users/auth/github",
          authCode: gitHubCode,
          onFinish: "/",
          onComplete: "/login/ssoRegister",
          navigate,
        })
      );
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

        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={"single_host_origin"}
        />

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
