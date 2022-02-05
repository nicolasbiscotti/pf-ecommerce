import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCollapse } from "../../../hooks/useCollapse";
import { actionGenerator } from "../../../services/actionGenerator";
import { SelectBoxStyled } from "./style";

const SelectBox = ({ data, nameReducer, nameKey, type, title, err }) => {
  const dispatch = useDispatch();
  const { handleCollapse, collapse, setCollapse } = useCollapse();
  const state = useSelector((state) => state[nameReducer][nameKey]);

  const handleOnChangeChecks = (e) => {
    const valueCheck = parseInt(e.target.value);
    dispatch(actionGenerator(type, valueCheck));
  };

  return (
    <SelectBoxStyled>
      <label className="collapse">
        <label onMouseOver={() => setCollapse(true)} onClick={handleCollapse}>
          {title}
        </label>
        {err && err[nameKey] && (
          <span onMouseOver={() => console.log("*")}>*</span>
        )}
      </label>
      {collapse && data && (
        <div className="checks" onMouseLeave={handleCollapse}>
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
