import { useEffect, useReducer, useState } from "react";
import FilterBar from "./components/FilterBar";
import UserList from "./components/UserList";
import data from "./assets/data.json";
import "./App.css";

export const ACTIONS = {
  ADD: "filtered-item-add",
  DELETE: "filtered-item-delete",
  CLEAR: "filtered-item-clear",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      if (!state.includes(action.payload)) return [...state, action.payload];
      else return state;
    case ACTIONS.DELETE:
      return state.filter((item) => item !== action.payload);
    case ACTIONS.CLEAR:
      return [];
    default:
      return state;
  }
}

function App() {
  const [users, setUsers] = useState([]);
  const [filteredItems, dispatch] = useReducer(reducer, []);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setUsers(
      data.map((item) => {
        return {
          ...item,
          filter_items: [
            ...item.languages,
            ...item.tools,
            item.role,
            item.level,
            item.location,
          ],
        };
      })
    );
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          filteredItems.every((item) => user.filter_items.includes(item)) ===
          true
      )
    );
  }, [filteredItems]);

  return (
    <div>
      <FilterBar filtered_items={filteredItems} dispatch={dispatch} />
      <UserList
        users={filteredUsers.length === 0 ? users : filteredUsers}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
