import { ALL } from '../Constants/ActionTypes'
import FilterList from '../compoments/FilterList';
const state = {
  apiTodoList: [],
  apiStatus: ALL
}
export const apiAdd = (todoItem) => {
  state.apiTodoList = [...(state.apiTodoList), todoItem]
  return true;
}
export const apiChangeStatus = (status) => {
  state.apiStatus = status
  console.log(FilterApi(state.apiStatus))

  return FilterApi(state.apiStatus)
}
export const apiChecked = (itemId, isCheck) => {
  state.apiTodoList.find(i => i.id == itemId).isComplete = isCheck
  return state.apiTodoList.find(i => i.id == itemId)
}
export const apiEdit = (itemId, content) => {
  state.apiTodoList.find(i => i.id == itemId).content = content
  return state.apiTodoList.find(i => i.id == itemId)
}
const FilterApi = (status) => {
  let list = [...state.apiTodoList]
  if (status === "active") {
    return list.filter(i => i.isComplete === false)
  }
  if (status === "complete") {
    return list.filter(i => i.isComplete === true)
  }
  return list;
}