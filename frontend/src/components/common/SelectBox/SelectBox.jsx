import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGenerator } from "../../../services/actionGenerator";
import { SelectBoxStyled } from "./style";

const SelectBox = ({ data, nameReducer, nameKey, type, title, err }) => {
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);
  const state = useSelector((state) => state[nameReducer][nameKey]);

  const handleOnChangeChecks = (e) => {
    const valueCheck = parseInt(e.target.value);
    dispatch(actionGenerator(type, valueCheck));
  };

  const handleOnClickCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <SelectBoxStyled>
      <label className="collapse" onClick={handleOnClickCollapse}>
        {title}
        {err && err[nameKey] && <span>*</span>}
      </label>
      {collapse && data && (
        <div className="checks">
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
