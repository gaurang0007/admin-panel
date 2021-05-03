import { ADD_USER, DELETE_USER, SAVE_UPDATE, UPDATE, USER_DATA } from "./ActionTypes";

export const userData = (data) => {
  return {
    type: USER_DATA,
    data: data,
  };
};

export const addUser = (data) => {
  return {
    type: ADD_USER,
    data: data,
  };
};

export const deleteUser = (index) => {
  return {
    type: DELETE_USER,
    index: index,
  };
};

export const update = (data) => {
  return {
    type: UPDATE,
    data: data,
  };
};

export const saveUpdate = (data) => {
  return {
    type: SAVE_UPDATE,
    data: data,
  };
};