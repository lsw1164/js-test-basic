import { request, options } from "./request.js";
import { BASE_URL, METHOD } from "../utils/constants.js";

export const fetchTodoUsers = async () => {
  try {
    return await request(BASE_URL);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchTodoItemsByUserName = async (userName) => {
  try {
    const user = await request(`${BASE_URL}/${userName}/item`);
    return user.todoList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addTodoItem = async (userName, contents) => {
  try {
    const url = `${BASE_URL}/${userName}/item`;
    return await request(url, options(METHOD.POST, { contents }));
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteTodoItemById = async (userName, todoId) => {
  try {
    const url = `${BASE_URL}/${userName}/item/${todoId}`;
    return await request(url, options(METHOD.DELETE));
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteAllTodoItems = async (userName) => {
  try {
    const url = `${BASE_URL}/${userName}/items`;
    return await request(url, options(METHOD.DELETE));
  } catch (error) {
    return { error: error.message };
  }
};

export const toggleTodoItemById = async (userName, todoId) => {
  try {
    const url = `${BASE_URL}/${userName}/item/${todoId}/toggle`;
    return await request(url, options(METHOD.PUT));
  } catch (error) {
    return { error: error.message };
  }
};

export const editTodoItemContentsById = async (userName, todoId, contents) => {
  try {
    const url = `${BASE_URL}/${userName}/item/${todoId}`;
    return await request(url, options(METHOD.PUT, { contents }));
  } catch (error) {
    return { error: error.message };
  }
};

export const changeTodoItemPriorityById = async (
  userName,
  todoId,
  priority
) => {
  try {
    const url = `${BASE_URL}/${userName}/item/${todoId}/priority`;
    return await request(url, options(METHOD.PUT, { priority }));
  } catch (error) {
    return { error: error.message };
  }
};