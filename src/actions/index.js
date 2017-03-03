let nextTodoId = 0
export const addptv = (stop_type) => {
  return {
    type: 'GET_DATA',
    stop_id: nextTodoId++,
    stop_type
  }
}
