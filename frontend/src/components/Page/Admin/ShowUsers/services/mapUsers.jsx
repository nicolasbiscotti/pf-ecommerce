import RowUser from "../RowUser/RowUser";

export const mapUsers = (allUsers) => {
  return allUsers.map(({ id, username, email, isActive, type }) => {
    return (
      <RowUser
        key={id}
        id={id}
        username={username}
        email={email}
        isActive={isActive}
        type={type}
      />
    );
  });
};
