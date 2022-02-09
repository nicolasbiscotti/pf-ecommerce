import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setMessage } from "../../../redux/reducers/login/actions";
import { StyledForm } from "../Styled/StyledForm";
import validateUser from "../utils/validate";
import { BsInfoCircle } from "react-icons/bs";
import { StyledButton } from "../Styled/StyledButton";
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

export default function RequestResetPass() {
  const [user, setUser] = useState({
    password: "",
    confirmpassword: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

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
        validateUser(newUser, ["password", "confirmpassword"]).hasRequired
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = {
        ...user,
        id: searchParams.get("id"),
        token: searchParams.get("token"),
      };
      const { data } = await axios.put("/users/resetpassword", body);
      if (data.state === State.FINISH) {
        dispatch(setMessage(data.message));
        navigate("/login");
      } else {
        dispatch(setMessage(data.message));
        navigate("/login");
      }
    } catch (error) {
      dispatch(
        setMessage({
          text: "Somthing went wrong! Try again!!",
          type: "danger",
        })
      );
      navigate("/login");
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
          Reset Password
        </StyledButton>
      </form>
    </StyledForm>
  );
}
