import style from "./UserCard.module.css";
import { ACTIONS } from "../App";
import { nanoid } from "nanoid";

function UserCard({
  company,
  logo,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  filter_items,
  dispatch,
}) {
  return (
    <div className={`${style.card} ${featured ? style.featured : ""}`}>
      <img src={logo} alt="Profile Picture" className={style.logo} />
      <div className={style.info}>
        <span className={style.bold}>{company}</span>
        {isNew && <span className={style.newText}>New!</span>}
        {featured && <span className={style.featuredText}>Featured</span>}
        <h2 className={style.position}>{position}</h2>
        <span className={style.gray}>{postedAt}</span>
        <span className={style.gray}> • {contract}</span>
        <span className={style.gray}> • {location}</span>
      </div>
      <div className={style.filterItems}>
        {filter_items.map((item) => {
          return (
            <span
              key={nanoid()}
              className={style.item}
              onClick={() => dispatch({ type: ACTIONS.ADD, payload: item })}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default UserCard;
