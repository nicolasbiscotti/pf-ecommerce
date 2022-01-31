import { useEffect, useState } from "react";
import { StyledForm } from "../Styled/StyledForm";
import axios from "axios";
import { BsInfoCircle, BsGithub } from "react-icons/bs";
import validateUser from "../utils/validate";
import { StyledButton } from "../Styled/StyledButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../redux/reducers/messages/actions";
import { IconContext } from "react-icons/lib";
import { corsAxiosGet } from "../../../services/corsAxios";
import {
  REACT_APP_GITHUB_CLIENT_ID,
  REACT_APP_GITHUB_CLIENT_SECRET,
  REACT_APP_PROXY_URL,
  REACT_APP_REDIRECT_URI,
} from "../../../constants";
import { login } from "../../../redux/reducers/github/actions";

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
    try {
      const { data } = await axios.post("/users/login", { ...user });
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        dispatch(setMessage(data.message));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      dispatch(
        setMessage({
          text: "Invalid username or password.",
          type: "danger",
        })
      );
      navigate("/login");
    }
  };

  const oauthurl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}`;

  const [gitHubData, setGitHubData] = useState({
    errorMessage: "",
    isLoadin: false,
  });

  const sendGitHubCode = async (url) => {
    const newUrl = url.split("?code=");
    window.history.pushState({}, null, newUrl[0]);
    setGitHubData({ ...gitHubData, isLoading: true });

    const requestData = {
      clientId: REACT_APP_GITHUB_CLIENT_ID,
      redirectUri: REACT_APP_REDIRECT_URI,
      clientSecret: REACT_APP_GITHUB_CLIENT_SECRET,
      code: newUrl[1],
    };

    const proxyUrl = REACT_APP_PROXY_URL + `?${url.split("?")[1]}`;

    // Use code parameter and other parameters to make POST request to proxy_server
    try {
      const { data } = await axios.post(proxyUrl, requestData);
      // dispatch(login({ user: data, isLoggedIn: true }));
      console.log(`--------------> code from api = ${JSON.stringify(data)}`);
      navigate("/");
    } catch (error) {
      setGitHubData({
        isLoadin: false,
        errorMessage: "Sorry! Login via GitHub has failed!",
      });
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
      setGitHubData({
        isLoadin: false,
        errorMessage: "Sorry! Login via GitHub has failed!",
      });
    }
  }, []);

  // const onSubmitGitHubHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await corsAxiosGet("/users/auth/githab");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

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
          href={oauthurl}
          onClick={() => {
            setGitHubData({ ...gitHubData, errorMessage: "" });
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
          onClick={() => navigate("register")}
          backgroundcolor="#6c728d"
        >
          Create an acount
        </StyledButton>
      </form>
    </StyledForm>
  );
}
