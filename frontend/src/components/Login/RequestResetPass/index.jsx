import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        validateUser(newUser, ["email"]).hasRequired
    );
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/users/sendResetPassword", {
        ...user,
      });
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

        <StyledButton onClick={onSubmitHandler} disabled={disabled}>
          Reset Password
        </StyledButton>
      </form>
    </StyledForm>
  );
}
