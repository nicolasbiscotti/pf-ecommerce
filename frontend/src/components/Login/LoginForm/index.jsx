import { useEffect, useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import { BsInfoCircle, BsGithub } from "react-icons/bs";
import validateUser from "../utils/validate";
import { StyledButton } from "../Styled/StyledButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons/lib";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_OAUTH_URL,
  REACT_APP_GITHUB_OAUTH_URL,
} from "../../../constants";
import {
  deleteMessage,
  fetchAuth,
  setGitHubCode,
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
    dispatch(
      fetchAuth({
        proxyURL: GOOGLE_OAUTH_URL,
        authToken: response.tokenId,
        onFinish: "/",
        onFailure: "/login",
        navigate,
      })
    );
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
          onFailure: "/login",
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
  }, [navigate, dispatch]);

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
        <label htmlFor="password">
          <span className="helpInfo">
            <BsInfoCircle /> <Link to="/login/requestPassReset">Forget your password?</Link>
          </span>
        </label>

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
          hoverbgcolor="rgba(0, 0, 0, 0.35)"
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
          buttonText="Login via Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <StyledButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              backgroundcolor="#rgba(255, 255, 255, 0.6)"
              hoverbgcolor="rgba(255, 255, 255, 0.8)"
              fontcolor="rgba(25, 25, 25, 0.65)"
            >
              <IconContext.Provider value={{ className: "icon" }}>
                <div className="iconTextButton">
                  <FcGoogle />
                  Login via Google
                </div>
              </IconContext.Provider>
            </StyledButton>
          )}
        />

        <StyledButton
          onClick={() => {
            dispatch(deleteMessage());
            navigate("register");
          }}
          backgroundcolor="#6c728d"
          hoverbgcolor="rgba(255, 255, 255, 0.35)"
        >
          Create an acount
        </StyledButton>
      </form>
    </StyledForm>
  );
}
