import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../redux/reducers/users/action";
import { mapUsers } from "./services/mapUsers";
import { ShowUsersSc } from "./style";

export default function ShowUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.allUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <ShowUsersSc>
      <div>
        <table>
          <caption>USERS</caption>
          <thead>
            <tr>
              <td>Username</td>
              <td>Email</td>
              <td>Type</td>
            </tr>
          </thead>
          <tbody>{mapUsers(allUsers)}</tbody>
        </table>
      </div>
    </ShowUsersSc>
  );
}
