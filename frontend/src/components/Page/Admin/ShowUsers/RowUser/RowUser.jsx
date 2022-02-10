import { MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateTypeUser } from "../../../../../redux/reducers/users/action";
import { RowUserSc } from "./style";
export default function RowUser({ id, username, email, type }) {
  const dispatch = useDispatch();
  const handleOnClickEdit = () => {
    const types = ["admin", "client"];
    const newTypes = types.filter((item) => item !== type);
    const isSame = types.length === newTypes.length;
    const newType = (isSame && type) || newTypes[0];
    dispatch(updateTypeUser({ id, type: newType }));
  };
  return (
    <RowUserSc>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <span className="type">{type}</span>
        <MdModeEditOutline className="btnEdit" onClick={handleOnClickEdit} />
      </td>
    </RowUserSc>
  );
}
