export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
};

export const addTodo = (payload) => ({
  type: actionTypes.ADD_TODO,
  payload: payload,
});

export const deleteTodo = (payload) => ({
  type: actionTypes.DELETE_TODO,
  payload: payload,
});

export const updateTodo = (payload) => ({
  type: actionTypes.UPDATE_TODO,
  payload: payload,
});
