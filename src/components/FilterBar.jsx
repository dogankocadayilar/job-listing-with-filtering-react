import { ACTIONS } from "../App";
import Filter from "./Filter";
import style from "./FilterBar.module.css";

function FilterBar({ filtered_items, dispatch }) {
  return (
    <div
      className={`${style.bar} ${filtered_items.length > 0 ? style.show : ""}`}
    >
      <ul className={style.list}>
        {filtered_items.map((item) => (
          <Filter key={item.id} filter={item} dispatch={dispatch} />
        ))}
      </ul>
      <button
        className={style.btn}
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        Clear
      </button>
    </div>
  );
}

export default FilterBar;
