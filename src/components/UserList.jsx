import UserCard from "./UserCard";
import style from "./UserList.module.css";

function UserList({ users, dispatch }) {
  return (
    <div className={style.list}>
      {users.map((user) => (
        <UserCard key={user.id} {...user} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default UserList;
