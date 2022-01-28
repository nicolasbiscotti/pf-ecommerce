import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { Button } from "../button/Button";
import { SelectBoxStyled } from "./style";

const SelectBox = ({ data, nameReducer, nameKey, type, title, err }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer][nameKey]);
  const handleOnChangeChecks = (e) => {
    const valueCheck = parseInt(e.target.value);
    dispatch(actionGenerator(type, valueCheck));
  };
  return (
    <SelectBoxStyled>
      <Button>
        {title}
        {err[nameKey] && <span>*</span>}
      </Button>
      {data && (
        <div>
          {data.map(({ id, name }) => {
            return (
              <span key={name}>
                <input
                  id={name}
                  type="checkbox"
                  value={id}
                  onChange={handleOnChangeChecks}
                  checked={state.includes(id)}
                />
                <label htmlFor={name}>{name}</label>
              </span>
            );
          })}
        </div>
      )}
    </SelectBoxStyled>
  );
};

export default SelectBox;
