import { ACTIONS } from "../App";
import style from "./Filter.module.css";

function Filter({ filter, dispatch }) {
  return (
    <li className={style.filter}>
      <span className={style.text}>{filter}</span>
      <button
        className={style.btn}
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE,
            payload: filter,
          })
        }
      >
        ✖
      </button>
    </li>
  );
}

export default Filter;
