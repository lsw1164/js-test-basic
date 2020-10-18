import { createStore, actionCreator } from "../utils/tiny-redux.js";

const SET_USER_LIST = "setUserList";
const SET_USER_ID = "setUserId";
const ADD_USER = "addUser";
const REMOVE_USER = "removeUser";

const SET_TODO_LIST = "setTodoList";

const ADD_TODO_ITEM = "addTodoItem";
const SET_TODO_ITEM = "setTodoItem";
const TOGGLE_TODO_ITEM = "toggleTodoItem";
const SET_TODO_FILTER = "setTodoFilter";

export const addTodoItem = ({ todoItem }) =>
  actionCreator(ADD_TODO_ITEM, { todoItem });

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_TODO_ITEM:
      const { todoItem } = payload;
      return {
        ...state,
        todoList: [...state.todoList, todoItem],
      };
  }
};

const todoStore = createStore(reducer);

export default todoStore;
